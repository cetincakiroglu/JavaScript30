// WITHOUT USING CSS VARIABLES


// const spacing = document.getElementById('spacing');
// const blurFilter = document.getElementById('blur');
// const color = document.getElementById('base');
// const image = document.getElementById('photo');

// spacing.addEventListener('change', function() {
//     let val = Number(spacing.value);
//     for (let i = 0; i < val; i++) {
//         val +=
//             image.style.cssText = `padding: ${val}px`;
//         console.log(val);

//     }
// });

// blurFilter.addEventListener('change', function() {
//     let val = Number(blurFilter.value);
//     for (let i = 0; i < val; i++) {
//         val +=
//             image.style.cssText = `filter: blur(${val}px);`
//         console.log(val);
//     }
// })

// color.addEventListener('change', function() {
//     let val = Number(color.value);
//     for (let i = 0; i < val; i++) {
//         val +=
//             image.style.cssText = `background-color: #${val};`
//         console.log(val);
//     }
// })

//WITH USING CSS VARIABLES AND FOR EACH LOOP

const controls = document.querySelectorAll('.controls input');


function changeStyle() {
    console.log(this.value);
    console.log(this.name);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
controls.forEach(input => input.addEventListener('change', changeStyle));