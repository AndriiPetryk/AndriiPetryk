function scrollFromLink () {
    const OSFT_ELEMENT = document.getElementById('osft')
    const FYT_ELEMENT = document.getElementById('react-youtube-clone')
    const split_url = window.location.href.split('/')
    if (split_url.includes('#osft') && OSFT_ELEMENT){
        OSFT_ELEMENT.scrollIntoView({ behavior: 'smooth' })
    }
    else if (split_url.includes('#react-youtube-clone') && FYT_ELEMENT){
        FYT_ELEMENT.scrollIntoView({ behavior: 'smooth' })
    }
}

export default scrollFromLink