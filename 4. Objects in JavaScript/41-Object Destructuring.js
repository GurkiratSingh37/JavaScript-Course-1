// Object destructuring

const band={
    bandName: "Led Zeppelin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong:"kashmir" 
};

const bName=band.bandName;
const fSong=band.famousSong;
console.log(bName, fSong);

//------------------OR---------------------------

// you cannot name variables other than the key name they have been assigned with.

const {bandName, famousSong}=band;
console.log(bandName, famousSong);

// if you want you can by using : and write the name of the key
const {bandName:bandName2, famousSong:famousSong2}=band;
console.log(bandName2, famousSong2);

// if you want other key-value pairs also, then use ... and it will be stored in a object.
const {bandName:bandName3, famousSong:famousSong3, ...restProp}=band;
console.log(bandName3, famousSong3, restProp);
