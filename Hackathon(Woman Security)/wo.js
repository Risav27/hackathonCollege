const findLocation = () => {

    // const status = document.querySelector('.status');

    const succcess = (position) => {
        // console.log(position)
        // alert("gg")
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        console.log(latitude)
        console.log(longitude)
        alert("Your location fetched , \n your latitude  : "+latitude +" Your longitude : " + longitude +"\n it will send to higher autharity for help")
    }

    const error = () => {
        alert("unable to fetch the location")
    }
    navigator.geolocation.getCurrentPosition(succcess,error)
}

const sendEmail =() => {
    Email.send({
        key : "fa326d7e-f75f-4e66-a58d-9f15142c95ca",
        From : "risav@test.com",
        Subject : "It's an emenrgency",
        Body : "And this is the body"
    }).then(
        message => alert(message)
        );
        
    }
    
    
    document.querySelector('.btnE').addEventListener('click',findLocation)
    document.querySelector('.bt').addEventListener('click',findLocation)