<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	const defaultFile = '/models/default.riv';
	export let file = defaultFile;
	import { getAudio, AudioQueue } from './audios';
	import { onMount, onDestroy } from 'svelte';
    import { Rive } from  '@rive-app/canvas'
	const audioQueue = AudioQueue();
	let audioElement = null;
	let audioMusic = null;

	const MAX_PRIORITY = 100;
	const GIFTS_PRIORITY = 90;
	const FOLLOWER_PRIORITY = 80;
	const JOIN_PRIORITY = 70;
	const LIKE_PRIORITY = 60;
	const AD_PRIORITY = 10;

	let renderIframe = false;

	let lastMessage = {
		nickname: '',
		message: '',
		profilePictureUrl: '',
		message: '',
		color: ''
	};

	let lastGift = {
		audio: '',
		nickname: '',
		giftPictureUrl: '',
		profilePictureUrl: ''
	};

	const messagesQueue = AudioQueue();
	let audioQueueInterval = null;
	let messagesInterval = null;

	const events = {
		NewGift: (input) => {
			input.value = 1;

			setTimeout(() => {
				input.value = 0;
			}, 6000);
		},
		StopGift: (input) => {
			input.value = 0;
		}
	};
	let showMessage = false;
	onDestroy(() => {
		clearInterval(audioQueueInterval);
		clearInterval(messagesInterval);
		if (audioMusic) {
			audioMusic.pause();
			localStorage.setItem('lastAudioTime', audioMusic.currentTime);
			audioMusic.currentTime = 0;
			audioMusic = null;
		}
	});

	let wakeUpSoundCoinGoal = 100;

	let wakeUpSoundCoin = 0;

	let isSleeping = true;

	let currentMeta = {
		type: '',
		values: []
	};

    

	onMount(() => {
		localStorage.setItem('wakeUpSoundCoinGoal', 100);
        let r = null;
		wakeUpSoundCoinGoal = parseInt(localStorage.getItem('wakeUpSoundCoinGoal') || '100') || 0;
		wakeUpSoundCoin = parseInt(localStorage.getItem('wakeUpSoundCoin') || '0') || 0;

		document.body.onclick = () => {
			const lastAudioTime = localStorage.getItem('lastAudioTime') || 0;
			renderIframe = true;
			document.body.onclick = () => {
				audioQueue.push({
					giftId: 'ad',
					nickname: 'Sistema',
					profilePictureUrl: ''
				});
			};

            let r = new Rive({
            src: file,
            canvas: document.getElementById('canvas'),
            stateMachines: 'GirlState',
            autoplay: true
        });

        const stop = () => {
            const inputs = r.stateMachineInputs('GirlState');
            const input = inputs.find((input) => input.name === 'Stop Gift');

            if (input) {
                events['StopGift'](input);
            }
        };

        audioQueueInterval = setInterval(() => {
            if (audioQueue.length() > 0 && (!audioElement || audioElement.ended)) {
                const data = audioQueue.pop();
                let { giftId } = data;
                const audio = getAudio(giftId)({
                    giftId,
                    lastAudio: lastGift.lastAudio
                });

                if (data.giftPictureUrl) {
                    lastGift = data;
                    lastGift.lastAudio = audio;
                }

                handleEvent('NewGift');
                audioElement = new Audio(audio);
                audioElement.onloadedmetadata = () => {
                    setTimeout(() => {
                        handleEvent('StopGift');
                    }, audioElement.duration * 1000);
                };
                audioElement.volume = 0.7;
                audioElement.play();
            }
        }, 1000);
        const handleEvent = (event) => {
            const inputs = r.stateMachineInputs('GirlState');
            const input = inputs.find((input) => input.name === 'New Gift');

            if (input) {
                events[event](input);
            }
        };

        socket.on(
            'NewGift',
            ({ giftPictureUrl, audio, nickname, profilePictureUrl, coins, count }) => {
                wakeUpSoundCoin += coins;

                if (wakeUpSoundCoin >= wakeUpSoundCoinGoal) {
                    audioQueue.push({
                        giftId: 'wakeUp',
                        nickname: 'Sistema',
                        profilePictureUrl: '',
                        priority: MAX_PRIORITY
                    });

                    wakeUpSoundCoin = 0;
                    wakeUpSoundCoinGoal = wakeUpSoundCoinGoal / 2;

                    if (wakeUpSoundCoinGoal < 30) {
                        wakeUpSoundCoinGoal = 30;
                    }

                    localStorage.setItem('wakeUpSoundCoinGoal', wakeUpSoundCoinGoal);
                }

                localStorage.setItem('wakeUpSoundCoin', wakeUpSoundCoin);
                for (let i = 0; i < count; i++) {
                    audioQueue.push({
                        giftPictureUrl,
                        nickname,
                        profilePictureUrl,
                        giftId: audio,
                        priority: GIFTS_PRIORITY
                    });
                }
            }
        );

        socket.on('NewMessage', (event) => {
            const { profilePictureUrl, message, nickname, color, textColor } = event;
            console.log(event);
            messagesQueue.push({
                profilePictureUrl,
                nickname,
                message,
                color,
                textColor,
                priority: GIFTS_PRIORITY
            });
        });
        const uniqueJoin = {};
        socket.on('NewJoin', (event) => {
            const { profilePictureUrl, nickname, color, textColor } = event;

            messagesQueue.push({
                profilePictureUrl,
                nickname,
                message: 'entrou na live!',
                color,
                textColor,
                priority: JOIN_PRIORITY
            });

            if (uniqueJoin[nickname]) {
                return;
            }

            uniqueJoin[nickname] = true;

            audioQueue.push({
                giftId: 'join',
                nickname,
                profilePictureUrl,
                priority: JOIN_PRIORITY
            });
        });

        socket.on('NewLike', (event) => {
            const { profilePictureUrl, nickname, totalLikeCount, likeCount, color, textColor } = event;

            messagesQueue.push({
                profilePictureUrl,
                nickname,
                message: `deu ${likeCount} likes! Total: ${totalLikeCount}`,
                color,
                textColor,
                priority: LIKE_PRIORITY
            });

            audioQueue.push({
                giftId: 'like',
                nickname,
                profilePictureUrl,
                priority: LIKE_PRIORITY
            });
        });

        socket.on('NewFollower', (event) => {
            const { profilePictureUrl, nickname, color, textColor } = event;

            messagesQueue.push({
                profilePictureUrl,
                nickname,
                message: `começou a seguir!`,
                color,
                textColor,
                priority: FOLLOWER_PRIORITY
            });

            audioQueue.push({
                giftId: 'subscribe',
                nickname,
                profilePictureUrl,
                priority: FOLLOWER_PRIORITY
            });
        });

        socket.on('NewShare', (event) => {
            const { profilePictureUrl, nickname, color, textColor } = event;

            messagesQueue.push({
                profilePictureUrl,
                nickname,
                message: `compartilhou a live!`,
                color,
                textColor,
                priority: FOLLOWER_PRIORITY
            });
        });

        socket.on('ViewerCount', (event) => {
            const { viewerCount } = event;
            messagesQueue.push({
                profilePictureUrl: '',
                nickname: '',
                message: `Total de espectadores: ${viewerCount}`,
                color: 'black',
                textColor: 'white'
            });
        });

        socket.on('RemoveHtmlElement', (event) => {
            const { id } = event;
            const element = document.getElementById(id);
            if (element) {
                element.remove();
            }
        });

        socket.on('NewHtmlElement', (event) => {
            const { id, html } = event;
            const element = document.getElementById(id);
            if (element) {
                element.remove();
            }

            document.body.insertAdjacentHTML('beforeend', html);
        });

        socket.on('NewMeta', (event) => {
            const { title, data } = event;

            const { type, values } = data;
            currentMeta = {
                type,
                values,
                title
            };

            localStorage.setItem('currentMeta', JSON.stringify(currentMeta));
        });

        messagesInterval = setInterval(() => {
            if (messagesQueue.length() > 0) {
                lastMessage = messagesQueue.pop();
            } else {
                lastMessage = {
                    nickname: '',
                    message: '',
                    profilePictureUrl: '',
                    message: '',
                    color: ''
                };
            }
        }, 4000);

        setInterval(() => {
            showMessage = true;

            audioQueue.push({
                giftId: 'ad',
                nickname: 'Sistema',
                profilePictureUrl: '',
                priority: AD_PRIORITY
            });

            setTimeout(() => {
                showMessage = false;
            }, 20000);
        }, 120000);
	
		};

      
    });

	let curentWakeup = (wakeUpSoundCoin / wakeUpSoundCoinGoal) * 100 + '%';

	curentWakeup = 100 - parseInt(curentWakeup) + '%';
</script>

{#if currentMeta.type === 'progress'}
	<div style="position: absolute; width: 50%; padding: 20px; top : 270px;">
		<h1 class="text-lg font-semibold text-center py-3 text-white">{currentMeta.title}</h1>
		{#each currentMeta.values as value, i}
			<div class="bg-white rounded-xl shadow-sm overflow-hidden p-1 m-3">
				<div class="relative h-6 flex items-center justify-center">
					<p
						class="text-black flex items-center"
						style="font-size:12px;position:absolute; z-index: 999"
					>
						{value.name}
						<img alt={value.name} src={value.img} class="w-8 h-8" />
					</p>
				</div>
			</div>
		{/each}
	</div>
{/if}
{#if showMessage}{/if}
<div
	style="position: absolute;width: 194px;height: 100px;z-index: 99;background-color: #16171b;bottom: 0px;right: 0;"
/>
{#if lastMessage.nickname}
	<div
		in:fly={{ y: 200, duration: 500 }}
		out:fade
		style="bottom: 227px; position:absolute;background-color: {lastMessage.color};padding: 13px;z-index: 999; right:0; width:80%"
		class="inline-flex w-full items-center rounded-lg px-6 py-5 text-base"
		role="alert"
	>
		<span class="mr-2">
			<img class="w-auto h-16" alt="user" src={lastMessage.profilePictureUrl} />
		</span>
		<div>
			<strong class="text-bold text-xs" style="color: {lastMessage.textColor};"
				>{lastMessage.nickname}</strong
			>
			<p style="color: {lastMessage.textColor};" class="p-2 text-xs">{lastMessage.message}</p>
		</div>
	</div>
{/if}
<iframe
	src="https://player.kick.com/leaogameplay?autoplay=true"
	width="500"
	height="400"
	frameborder="no"
	scrolling="no"
	allow="fullscreen"
	title="Live feed"
/>
<div
	class="bg-purple rounded-xl shadow-sm overflow-hidden p-1"
	style="height: 80px;left: 0%; width: 100%"
>
	<p class="text-white text-center text-bold">Meta de Moedas:</p>
	<p class="text-white text-center text-bold text-xl mt-4">
		{wakeUpSoundCoin} / {wakeUpSoundCoinGoal}
	</p>
</div>

<div class="container wrapper">
	<canvas id="canvas" width="800" height="350" />
</div>
