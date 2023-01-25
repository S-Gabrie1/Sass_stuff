
const btn1 = document.querySelector('#rand') as HTMLButtonElement;
const types = (document.querySelector('.drop-down') as HTMLSelectElement);
const textBox = document.querySelector('.text-box') as HTMLElement;
const options = (document.querySelector('option') as HTMLOptionElement);


let Bored = {
    fetchBored: function(actions:any) {
        fetch(`http://www.boredapi.com/api/activity?type=${actions}`)

        .then((response) => response.json())
        .then((data) => this.activities(data));
    },

    activities: function(data:any) {
        const { activity } = data;
        console.log(activity);
        textBox.innerText = activity;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" + activity + "')";
    },

    search: function() {
        this.fetchBored(types.value);
    }
    
    
};


types.addEventListener("change", function(e) {
    Bored.search();

})

btn1.addEventListener("click", function(){
    Bored.search();
    console.log("hello")
})
