<template>
    <div class="company-goals">
        <div class="clients-helped" v-for="i in achievements" :key="i.id">
            <img :src="i.img">
            <h3>{{ i.title }}</h3>
            <h2>{{ i.numbers }}</h2>
        </div>
    </div>
</template>

<script>
let id = 0;
export default {
    name: 'CompanyGoals',
    data() {
        return {
            achievements: [
                { id: id++, title: 'Clients Helped', numbers: '200+', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105088926064054342/goals1.png'},
                { id: id++, title: 'Candidates Placed', numbers: '2,000+', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105088926248607764/goals2.png' },
                { id: id++, title: 'Projects Completed', numbers: '500+', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105088926500270260/goals3.png' },
                { id: id++, title: 'Profiles Scouted', numbers: '700+', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105088925854347294/goals4.png' }
            ]
        }
    }
}
</script>

<style scoped>
.company-goals {
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    align-items: center;
    justify-content: space-around;
}

.company-goals .clients-helped {
    display: flex;
    flex: 1 1 200px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.company-goals .clients-helped h3 {
    text-align: center;
}

.company-goals .clients-helped h2 {
    margin: 0 0;
}

.company-goals .clients-helped img {
    height: 70px;
}

@media screen and (max-width: 650px) {
    .company-goals .clients-helped h3 {
        font-size: 16px;
    }

    .company-goals .clients-helped h2 {
        font-size: 20px;
    }

    .company-goals .clients-helped {
        flex: 1 1 100px;
    }
}
</style>