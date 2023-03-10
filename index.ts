import './style.css';
import './index.html';
import { of, from, Observable, timer, filter, fromEvent, interval } from 'rxjs';
import { map, debounceTime, skipUntil } from 'rxjs/operators';

// // of operator
// const values = of('Batu', [1, 2, 3], 4, 4.3, 'best-practices', {
//   a: 1,
//   b: 2,
//   c: 3,
// });

// values.subscribe((data) => {
//   console.log(data);
// });

// // timer operator
// const publisher = timer(2000);
// publisher.subscribe(
//   (val) => {
//     console.log('Bu yazı 2sn sonra gözükecek.');
//   },
//   (err) => {},
//   () => {
//     console.log('Veri alma işlemi tamamlandı.');
//   }
// );

// const publisher2 = timer(4000, 2000);
// const subscription = publisher2.subscribe(
//   (val) => {
//     console.log('Bu yazı 5sn sonra her 2snde bir kez gözükecek.' + val);
//   },
//   (err) => {},
//   () => {
//     console.log('Veri alma işlemi tamamlandı.');
//   }
// );
// setTimeout(() => {
//   console.log('Timer 2 durduruldu.');
//   subscription.unsubscribe();
// }, 10000);

// function stop() {
//   console.log('timer subscription durduruldu');
//   subscription.unsubscribe();
// }

// const map = new Map();
// map.set(1, 'Kitaplar');
// map.set(2, 'Kalemler');
// map.set(3, 'Silgiler');

// const fromPublisher = from(map);
// fromPublisher.subscribe(
//   (val) => {
//     console.log(`${val[0]} - ${val[1]}`);
//   },
//   (err) => {},
//   () => {
//     console.log('Veri alma işlemi tamamlandı.');
//   }
// );

//filter operator
// const myArray = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// myArray.pipe(filter((val) => val % 2 !== 0)).subscribe(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

//debounceTime operator
// const input = document.getElementById('textSearch');
// fromEvent(input, 'keyup')
//   .pipe(debounceTime(300))
//   .subscribe((data) => {
//     console.log(data.target.value);
//   });

//skipUntil operator
// const myTimer = interval(1000);
// myTimer.pipe(skipUntil(timer(5000))).subscribe((val) => {
//   console.log(val);
// });

//example-2

const myclick = fromEvent(document, 'click');
const myInterval = interval(1000);

myInterval.pipe(skipUntil(myclick)).subscribe((data) => {
  console.log(data);
});
