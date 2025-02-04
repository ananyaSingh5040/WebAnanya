class Human{
    //properties:

     height= "5ft 5in";
     #weight= 80; //private member
     skin="fair";

     //constructor:
     constructor(newHeight,newWeight, newSkin)
     {
      this.height= newHeight;
      this.#weight= newWeight;
      this.skin= newSkin;

     }

     //behaviour:

     walk(){
        console.log("This person is walking");

     }
      run=()=>{
        console.log("This person is running",this.#weight);

     }
     get fetchWeight(){
      return this.#weight;
     }
     set setWeight(val){
      this.#weight= val;

     }
     //without get , set bhi work karta par clarity purpose ke liye.

}
let obj = new Human("6ft",60,"dark");
console.log(obj.height);
console.log(obj.fetchWeight);
obj.skin;
obj.walk();
obj.run();