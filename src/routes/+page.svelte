<script lang="ts">
    import ChristmasLights from '$lib/images/lights03.gif'
    import {onMount, onDestroy} from "svelte";

    let timeUntilChristmasPretty = "calculating..."

    onMount(async () => {
        calculateTimeToChristmas();
    });

    let interval = setInterval(async () => {
        calculateTimeToChristmas();
    }, 1000)

    onDestroy(() => clearInterval(interval))




    function calculateTimeToChristmas(){
        //Calculate time until Christmas
        let today  = new Date();
        let christmas = new Date("2022-12-24");

        let todayMilliseconds = today.getTime();
        let christmasMilliseconds = christmas.getTime();

        let timeUntilChristmasInMilliseconds = christmasMilliseconds - todayMilliseconds;

        timeUntilChristmasPretty = timeConversion(timeUntilChristmasInMilliseconds);
    }


    function timeConversion(duration: number) {
        const portions: string[] = [];

        const msInDays = 1000 * 60 * 60 *24;
        const days = Math.trunc(duration / msInDays);
        if (days > 0) {
            portions.push(days + 'd');
            duration = duration - (days * msInDays);
        }


        const msInHour = 1000 * 60 * 60;
        const hours = Math.trunc(duration / msInHour);
        if (hours > 0) {
            portions.push(hours + 'h');
            duration = duration - (hours * msInHour);
        }

        const msInMinute = 1000 * 60;
        const minutes = Math.trunc(duration / msInMinute);
        if (minutes > 0) {
            portions.push(minutes + 'm');
            duration = duration - (minutes * msInMinute);
        }

        const seconds = Math.trunc(duration / 1000);
        if (seconds > 0) {
            portions.push(seconds + 's');
        }

        return portions.join(' ');
    }
</script>

<h1 class="text-center text-6xl font-extrabold text-red-600">
    Christmas Countdown
</h1>

<img src="{ChristmasLights}"/>

<div class="flex justify-center">
    <h2 class="text-red-200 text-center mt-15 text-6xl p-4 rounded-3xl">
        {timeUntilChristmasPretty}
    </h2>
</div>


<style>
    h1 {
        font-family: 'Mountains of Christmas', cursive;
    }

    h2 {
        font-family: 'Dancing Script', cursive;
        font-weight: 400;
    }
</style>
