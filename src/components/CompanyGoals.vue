<template>
    <div class="company-goals">
        <div class="clients-helped" v-for="i in achievements" :key="i.id">
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
                { id: id++, title: 'Clients Helped', numbers: '200+' },
                { id: id++, title: 'Candidates Placed', numbers: '2,000+' },
                { id: id++, title: 'Projects Completed', numbers: '500+' },
                { id: id++, title: 'Profiles Scouted', numbers: '700+' }
            ]
        }
    }
}
</script>

<style>
.company-goals {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: space-around;
}

.company-goals .clients-helped {
    display: flex;
    flex: 1 1 150px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.company-goals .clients-helped h2 {
    margin: 0 0;
}

@media screen and (max-width: 650px) {
    .company-goals .clients-helped h3 {
        font-size: 16px;
    }

    .company-goals .clients-helped h2 {
        font-size: 20px;
    }
}
</style>