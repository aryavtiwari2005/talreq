<template>
    <div class="company-goals">
        <div class="clients-helped" v-for="i in achievements" :key="i.id">
            <img :src="i.img">
            <h3>{{ i.title }}</h3>
            <div class="counter">
                <h2 class="counter-value" :data-count="i.numbers">0</h2><h2>+</h2>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
let id = 0;

export default {
    name: 'CompanyGoals',
    data() {
        return {
            achievements: [
                { id: id++, title: 'Clients Helped', numbers: '11', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105088926064054342/goals1.png' },
                { id: id++, title: 'Candidates Placed', numbers: '75', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105088926248607764/goals2.png' },
                { id: id++, title: 'Projects Completed', numbers: '24', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105088926500270260/goals3.png' },
                { id: id++, title: 'Profiles Scouted', numbers: '46', img: 'https://media.discordapp.net/attachments/1023634058158276670/1105088925854347294/goals4.png' }
            ]
        }
    },
    mounted() {
        var a = 0;
        $(window).scroll(function () {
            var oTop = $('.company-goals').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },

                        {

                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                a = 1;
            }
        });
    }
}
</script>

<style scoped>
.company-goals {
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: space-around;
}

.company-goals .clients-helped .counter-thing {
    display: flex;
    flex-direction: row;
    margin: none;
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
    font-size: 30px;
    font-weight: lighter;
    margin-top: 0;
}

.company-goals .clients-helped h2 {
    margin: 0 0;
    font-size: 36px;
    font-weight: lighter;
    display: inline;
}

.company-goals .clients-helped img {
    height: 100px;
}

@media screen and (max-width: 650px) {
    .company-goals .clients-helped h3 {
        font-size: 16px;
    }

    .company-goals .clients-helped h2 {
        font-size: 20px;
    }

    .company-goals .clients-helped {
        flex: 1 1 150px;
    }
}
</style>