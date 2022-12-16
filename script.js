function Verify() {
    let date = new Date()
    let year = date.getFullYear()
    let fyear = document.getElementById('txtyear')
    let result = document.querySelector('div#result')
    

    if(fyear.value.length == 0 || Number(fyear.value) > year ) {
        window.alert('[ERROR] Verify the data and try again')
    } else {
        let fsex = document.getElementsByName('sex')
        let age = year - Number(fyear.value)
        let gender = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if(fsex[0].checked) {

            gender = 'man'

            if(age >= 0 && age <= 5) {
                //Baby
                img.setAttribute('src', 'babyboy.jpg')
            } else if(age > 6 && age <= 10 ) {
                //Child
                img.setAttribute('src', 'boy.jpg')
            } else if(age <= 18) {
                img.setAttribute('src', 'teenboy.jpg')
                //Teenager
            } else if (age > 19 && age < 30) {
                //Young
                img.setAttribute('src', 'youngboy.jpg')
            } else if(age >= 30 && age < 50) {
                //Adult
                img.setAttribute('src', 'man.jpg')
            } else {
                //Elder
                img.setAttribute('src', 'elderman.jpg')
            }
            

        } else if (fsex[1].checked) {
            gender = 'woman'

            if(age >=0 && age <=5 ) {
                img.setAttribute('src', 'babygirl.jpg')

            } else if( age > 6 && age <= 10) {
                img.setAttribute('src', 'girl.jpg')

            } else if( age <= 18) {
                img.setAttribute('src', 'teengirl.jpg')

            } else if(age <= 30) {

                img.setAttribute('src', 'younggirl.jpg')

            } else if(age > 30 && age <= 50) {
                img.setAttribute('src', 'woman.jpg')
                
            } else {
                img.setAttribute( 'src', 'elderwoman.jpg')
            }
        }
        result.innerHTML = `you are a ${gender} with ${age} years.`
        result.appendChild(img)
    }
}