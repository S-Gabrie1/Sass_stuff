const btn1 = document.querySelector("#rand");
const types = document.querySelector(".drop-down");
const textBox = document.querySelector(".text-box");
const options = document.querySelector("option");
let Bored = {
    fetchBored: function(actions) {
        fetch(`http://www.boredapi.com/api/activity?type=${actions}`).then((response)=>response.json()).then((data)=>this.activities(data));
    },
    activities: function(data) {
        const { activity  } = data;
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
});
btn1.addEventListener("click", function() {
    Bored.search();
    console.log("hello");
});

//# sourceMappingURL=index.3e2c7195.js.map
