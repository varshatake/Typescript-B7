class Gradcalculator {
  grad: any = confirm(`*** Grad Calculator ***`);
  math: any = prompt(`Enter the Maths Mark's : `);
  physics: any = prompt(`Enter the Physics Mark's :`);
  chem: any = prompt(`Enter the Chemistry Mark's :`);
  sum: any;
  Avg: any | Number;

  no1 = parseFloat(this.math);
  no2 = parseFloat(this.physics);
  no3 = parseFloat(this.chem);

  gradC() {
    console.log(`-------- Grad Calculator Assignment ---------`);
    console.log(`Maths Mark : ${this.math}`);
    console.log(`Physics Marks : ${this.physics}`);
    console.log(`Chemistry Marks : ${this.chem}`);

    alert(`Maths Mark : ${this.math}`);
    alert(`Physics Marks : ${this.physics}`);
    alert(`Chemistry Marks : ${this.chem}`);

    //sum of all subject marks
    this.sum = this.no1 + this.no2 + this.no3;
    console.log(`Summation is : ${this.sum}`);
    console.log(`-----------------------------------`);

    alert(`Addition of All subject Marks : ${this.sum}`);

    //Average of marks
    this.Avg = this.sum / 3;
    console.log(`Average is : ${this.Avg}`);
    alert(`Average : ${this.Avg}`);

    ///////////////////
    if ((this.Avg) === undefined ||(this.Avg) === null || isNaN(this.Avg)) {
      alert("Please enter valid Input...");
    } else {
      if (this.Avg < 70) {
        console.log(`grade = "C"`);
        alert(`grade = "C"`);
      } else if (this.Avg > 70 && this.Avg < 90) {
        console.log(` grade = "B"`);
        alert(` grade = "B"`);
      } else {
        console.log(`grade = "A"`);
        alert(` grade = "A"`);
      }
    }

    //////////////////
  }
}

var gradObj = new Gradcalculator();
gradObj.gradC();
