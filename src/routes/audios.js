const defaultCb = () => {
  const audios = [
    'audio/ad.mp3',
    'audio/ad1.mp3',

  ]

  return audios[Math.floor(Math.random() * audios.length)]
}

const flowersCb = () => {
  const roseAudios = [
    'audio/rosa.mp3',
    'audio/rosa.mp3',
    'audio/rosa1.mp3',
    'audio/rosa.mp3',
    'audio/flowers_1.mp3',
    'audio/rosa.mp3',
    'audio/rosa.mp3',
    'audio/rosa.mp3',
    'audio/rosa.mp3',

  ]

  
  return roseAudios[Math.floor(Math.random() * roseAudios.length)]

  
}

const tiktokCb = () => {
  const tiktokAudios = [
    'audio/tiktok.mp3',
    'audio/tiktok_1.mp3',
    'audio/tiktok_2.mp3',
  ]

  return tiktokAudios[Math.floor(Math.random() * tiktokAudios.length)]
}

const heartsCb = () => {
  return 'audio/random_1.mp3'
}

const kissCb = () => {
  return 'audio/random_1.mp3'
}

const coffeeCb = () => {
  const audios = [
    'audio/coffe_3.mp3',
    'audio/coffee.mp3',
    'audio/coffee+2.mp3',
    'audio/coffe_1.mp3',
  ]

  return audios[Math.floor(Math.random() * audios.length)]
}

const trophyCb = () => {

  return 'audio/numberone_1.mp3'
}



const unicornCb = () => {
  return defaultCb()
}

const foodCb = ({giftId}) => {
  if (giftId == '6416') {
    const audios = [
      'audio/cookie_1.mp3',
      'audio/cookie_2.mp3',
      'audio/cookie_3.mp3',
      'audio/cookie.mp3',
    ]

    return audios[Math.floor(Math.random() * audios.length)]
  }

  return defaultCb()
}

const partyCb = () => {
    return defaultCb()
}

const chocolateCb = ({lastAudio}) => {
  
  if(lastAudio === 'audio/rosa.mp3') {
    const flowersAndChocolatesAudios = [
      'audio/flowers_and_chocolate_1.mp3',
      'audio/flowers_and_chocolate.mp3',
    ]

    return flowersAndChocolatesAudios[Math.floor(Math.random() * flowersAndChocolatesAudios.length)]
  }


  const audios = [
    'audio/chocolate.mp3',
    'audio/chocolate1.mp3',
  ]

  return audios[Math.floor(Math.random() * audios.length)]
}

const hugCb = () => {
  return 'audio/powerhug.mp3'
}

const perfumeCb = () => {
  return defaultCb()
}

const fireCb = () => {
  return 'audio/fire.mp3'
}

const birthCakeCb = () => {
  return defaultCb()
}

const galaxyCb = () => {
  return defaultCb()
}

const amazingCb = () => {
  return defaultCb()
}

const loveYouCb = () => {
  return 'audio/amei.mp3'
}

const crwonCb = () => {
  return defaultCb()
}

const asmrCb = () => {  
  const audios = [
    'audio/asmr_1.mp3',
    'audio/asmr_2.mp3',
  ]

  return audios[Math.floor(Math.random() * audios.length)]
}

const thumbsUpCb = () => {
  return defaultCb()
}

const animalCb = () => { 
  return defaultCb()
}

const likeCb = () => {
  const audios = [
    'audio/like_1.mp3',
    'audio/like_2.mp3',
    'audio/like_3.mp3',
  ]

  return audios[Math.floor(Math.random() * audios.length)]
}

const subscribeCb = () => {
  const audios = [
    'audio/subscribe_1.mp3',
    'audio/subscribe_2.mp3',
    'audio/subscribe_3.mp3',

  ]

  return audios[Math.floor(Math.random() * audios.length)]
}

const joinCb = () => {
  return 'audio/join.mp3'
}

const wakeUpCb = () => {
  const audios = [
    'audio/wakeUp.mp3',
    'audio/wakeUp1.mp3',
    'audio/wakeUp2.mp3',
    'audio/wakeUp3.mp3',

  ]

  return audios[Math.floor(Math.random() * audios.length)]

}


const audios = {
    'like': likeCb,
    'subscribe': subscribeCb,
    'wakeUp' : wakeUpCb,
    'join' : joinCb,
    "5269": tiktokCb,
    "5327": heartsCb,
    "5328": kissCb,
    "5333": coffeeCb,
    "5338": unicornCb,
    "5460": trophyCb,
    "5487": heartsCb,
    "5494": defaultCb,
    "5547": foodCb,
    "5566": heartsCb,
    "5585": partyCb,
    "5586": heartsCb,
    "5630": chocolateCb,
    "5631": hugCb,
    "5655": flowersCb,
    "5658": perfumeCb,
    "5719": fireCb,
    "5780": flowersCb,
    "5867": birthCakeCb,
    "5879": foodCb,
    "5886":  galaxyCb,
    "5983":  amazingCb,
    "5984":  loveYouCb,
    "6034": flowersCb,
    "6097": crwonCb,
    "6113": foodCb,
    "6148": flowersCb,
    "6185": asmrCb,
    "6240": asmrCb,
    "6246": thumbsUpCb,
    "6247": heartsCb,
    "6265": animalCb,
    "6267": animalCb,
    "6271": animalCb,
    "6348": animalCb,
    "6369": animalCb,
    "6416": foodCb,
    "7934": heartsCb,
  }


export const getAudio = (id) => {
    return audios[id] || defaultCb
}


// AudioQueue is a priority queue that plays the audio with the highest priority must implement the following methods:
// the methods of a heap 
export const AudioQueue = () => {
  const array = []
  
  const LEFT = (i) => 2 * i + 1
  const RIGHT = (i) => 2 * i + 2
  const PARENT = (i) => Math.floor((i - 1) / 2)

  const swap = (i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  const insert = (audio) => {
    array.push(audio)
    let i = array.length - 1
    while (i > 0 && array[PARENT(i)].priority < array[i].priority) {
      swap(i, PARENT(i))
      i = PARENT(i)
    }
  }

  const heapify = (i) => {
    const l = LEFT(i)
    const r = RIGHT(i)
    let largest = i

    if (l < array.length && array[l].priority > array[largest].priority) {
      largest = l
    }

    if (r < array.length && array[r].priority > array[largest].priority) {
      largest = r
    }

    if (largest !== i) {
      swap(i, largest)
      heapify(largest)
    }
  }

  const extractMax = () => {
    if (array.length === 0) {
      return null
    }

    const max = array[0]
    array[0] = array[array.length - 1]
    array.pop()
    heapify(0)
    return max
  }

  const push = (audio) => {
    insert(audio)
  }

  const pop = () => {
    return extractMax()
  }

  const peek = () => {
    return array[0]
  }

  return {
    push,
    pop,
    peek,
    length: () => array.length
  }

  
}