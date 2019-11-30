class Conserve{
  constructor(person){
    this.person=person;
    this.totalPersonConsume=0
    this.totalConsumptionByItem=0
  }
/*
 * [getWaterConsumeByPerson]
 * @return  [total water consume by person]
 */
  getWaterConsumeByPerson(){
    let personConsume=150;//an average person takes 150 lit/day
    if(this.person%2===0){
      this.person=this.person+(this.person/2);
    }
    this.totalPersonConsume=personConsume*this.person;
    return this.totalPersonConsume
  }
  /*
   * [getItemWaterConsumption]
   * @return [total water concume by each item]
   */
  getItemWaterConsumption(flowPerItem,noOfItem){
    let waterFlow=flowPerItem;//an average water flow
    let waterConsumePerPerson=waterFlow*noOfItem;// considered each person uses each item one time in a day
    this.totalWaterConsume=waterConsumePerPerson*this.person;//water concume by all persons
    return this.totalWaterConsume;
  }
  /*
   * [getTotalConsumption]
   * @return [total water consume by all items]
   */
  getTotalConsumption(tap,shower,flush,washingMachine,dishWasher,filter){
    this.totalConsumptionByItem=tap+shower+flush+washingMachine,dishWasher,filter;
    return this.totalConsumptionByItem;
  }
  /*
   * [getGrayWater]
   * @return  [total gray water produce]
   */
  getGrayWater(){
    //15% produced by laundry troughs and washing machines
    //20% produced by the toilet
    //31% produced by the kitchen and other house holds
    return Math.floor(this.totalConsumptionByItem* 0.66);
  }
  /*
   * [getBlackWater]
   * @return  [total black water produce]
   */
  getBlackWater(){
    //average 50 lit/person/day Black Water
    return (50*this.person);
  }
}

module.exports = Conserve;
