console.log('JavaScript is working!')

const btnIDs = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 
'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5',
 'e1', 'e2', 'e3', 'e4', 'e5', 'f1', 'f2', 'f3', 'f4', 'f5', 
 'g1', 'g2', 'g3', 'g4', 'g5', 'h1', 'h2', 'h3', 'h4', 'h5',
 'i1', 'i2', 'i3', 'i4', 'i5', 'j1', 'j2', 'j3', 'j4', 'j5'];

const btnNames = btnIDs.map(function(el) {
    return el.toLocaleUpperCase();
})

 console.log(btnNames);
 console.log(btnIDs);