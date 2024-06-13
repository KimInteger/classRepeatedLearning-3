class Monster {
  name : string;
  apk : number;
  def : number;
  hp : number;
  explain : string;
  constructor(name : string,apk : number,def :number,hp :number,explain :string){
    this.name = name;
    this.apk = apk;
    this.def = def;
    this.hp = hp;
    this.explain = explain;
  }

  printMonsterDetail = () : void => {
    console.log(`${this.name}의 공격력은 ${this.apk}이고, 방어력은 ${this.def}이다. 체력은 ${this.hp}입니다.
    이 몬스터에 대한 설명은 다음과 같습니다. ${this.explain}`);
  }
}

let monster = new Monster("고블린",45,10,150,"산속의 작은 몬스터 무리생활을 한다");


monster.printMonsterDetail();