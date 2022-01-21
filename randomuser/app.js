const app = Vue.createApp({
data(){
    return {
        gender:'male',
        firstName:'shuhaib',
        lastName:'zahir',
        email:'dev.shuahib@gmail.com',
        picture:'https://pbs.twimg.com/profile_images/1390886031851855880/wktTnTP3_400x400.jpg'
    }
},
methods:{
    getRandomUsers(){

        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(result => {
            let data = result.results[0]
            this.firstName=data.name.first;
            this.lastName = data.name.last;
            this.email = data.email
            this.picture = data.picture.large 
            this.gender = data.gender

        });
    }
}
})

app.mount("#app")