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
   async getRandomUsers(){

        let data = await fetch('https://randomuser.me/api/').then((respo)=>respo.json())
        data= data.results[0]
        this.gender=data.gender,
        this.firstName=data.name.first,
        this.lastName=data.name.last,
        this.email=data.email,
        this.picture=data.picture.large
         
         
    }
}
})

app.mount("#app")