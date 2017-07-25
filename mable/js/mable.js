// ������ ����
// �� ���� top ���� x��ǥ
// �� ���� left ���� y��ǥ
// ��÷ ���� �̹��� src
// ��÷ ���� alt

var data = [
  {
    y:15,
    x:680,
    img:null,
    txt:null
  },
  {
    y:70,
    x:750,
    img:'./img/goods/01.png',
    txt:'�� 5�� ȹ�� ���ɴ�� ȹ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:120,
    x:830,
    img:'./img/goods/02.png',
    txt:'����� ��� ���� 1�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:170,
    x:920,
    img:'./img/goods/03.png',
    txt:'BLESS FOR YOU ���ɴ�� ��ǰ������ Ȳ�ݺ� �ູ�� ������ڰ� ���޵Ǿ����ϴ�. ����� ���� ��� ����, ���� �� ��� ����, ���� �� 3�� ������, ������ ��ü��Ÿ Ȳ�� �ٷ���, ���� ���� 2�� ȹ���(3�ð�), ���� ���� 2�� ȹ���(7��), �� ���� 2�� ȹ���(3�ð�), ������ Ź�� ������, Ȱ������ ����(���), 700��޳� �� ��������'
  },
  {
    y:220,
    x:1000,
    img:'./img/goods/04.png',
    txt:'ü�� ȸ���� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:260,
    x:1080,
    img:'./img/goods/05.png',
    txt:'���� ���� ��ȭ���� 1�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:305,
    x:1150,
    img:'./img/goods/06.png',
    txt:'������ ��� ȸ���� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:345,
    x:1230,
    img:'./img/goods/07.png',
    txt:'������ ���� ����� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:395,
    x:1150,
    img:'./img/goods/08.png',
    txt:'�̱��� �հ��� �ź� ���� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:435,
    x:1080,
    img:'./img/goods/09.png',
    txt:'���� �ູ ��� 10��� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:485,
    x:1000,
    img:'./img/goods/10.png',
    txt:'������ ���̽� Ǫ�� 4�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:525,
    x:920,
    img:'./img/goods/11.png',
    txt:'�ϱ� ü�� ȸ���� 4�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },{
    y:575,
    x:830,
    img:'./img/goods/12.png',
    txt:'��ź�� ���� ��ȯ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:615,
    x:920,
    img:'./img/goods/13.png',
    txt:'�ϱ� ���� ȸ���� 4�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:655,
    x:1000,
    img:'./img/goods/14.png',
    txt:'���� 4�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:705,
    x:920,
    img:'./img/goods/15.png',
    txt:'BLESS FOR YOU ���ɴ�� ��ǰ������ Ȳ�ݺ� �ູ�� ������ڰ� ���޵Ǿ����ϴ�. ����� ���� ��� ����, ���� �� ��� ����, ���� �� 3�� ������, ������ ��ü��Ÿ Ȳ�� �ٷ���, ���� ���� 2�� ȹ���(3�ð�), ���� ���� 2�� ȹ���(7��), �� ���� 2�� ȹ���(3�ð�), ������ Ź�� ������, Ȱ������ ����(���), 700��޳� �� ��������'
  },
  {
    y:755,
    x:830,
    img:'./img/goods/16.png',
    txt:'��Ͽ� Ư����� 30��� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:795,
    x:750,
    img:'./img/goods/17.png',
    txt:'�̱��� �հ��� �ź� ���� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:845,
    x:680,
    img:'./img/goods/18.png',
    txt:'���� �ູ ��� 10��� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:795,
    x:600,
    img:'./img/goods/19.png',
    txt:'��� �� ������ 1�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:755,
    x:510,
    img:'./img/goods/20.png',
    txt:'BLESS FOR YOU ���ɴ�� ��ǰ������ Ȳ�ݺ� �ູ�� ������ڰ� ���޵Ǿ����ϴ�. ����� ���� ��� ����, ���� �� ��� ����, ���� �� 3�� ������, ������ ��ü��Ÿ Ȳ�� �ٷ���, ���� ���� 2�� ȹ���(3�ð�), ���� ���� 2�� ȹ���(7��), �� ���� 2�� ȹ���(3�ð�), ������ Ź�� ������, Ȱ������ ����(���), 700��޳� �� ��������'
  },
  {
    y:705,
    x:440,
    img:'./img/goods/21.png',
    txt:'�� 5�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:655,
    x:350,
    img:'./img/goods/22.png',
    txt:'ü�� ȸ���� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:615,
    x:440,
    img:'./img/goods/23.png',
    txt:'������ ���� ����� 2��  ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:575,
    x:510,
    img:'./img/goods/24.png',
    txt:'������ ��� ȸ���� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:525,
    x:440,
    img:'./img/goods/25.png',
    txt:'�̱��� �հ��� �źϱ��� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:485,
    x:350,
    img:'./img/goods/26.png',
    txt:'����� �縶�� �޴ٸ� ���� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:435,
    x:270,
    img:'./img/goods/27.png',
    txt:'���� �ູ ��� 10��� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:395,
    x:200,
    img:'./img/goods/28.png',
    txt:'�ٻ��� �� ���� Ƣ�� 4�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },{
    y:345,
    x:120,
    img:'./img/goods/29.png',
    txt:'���� ���� ���ɷ� 4�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },{
    y:305,
    x:200,
    img:'./img/goods/30.png',
    txt:'BLESS FOR YOU ���ɴ�� ��ǰ������ Ȳ�ݺ� �ູ�� ������ڰ� ���޵Ǿ����ϴ�. ����� ���� ��� ����, ���� �� ��� ����, ���� �� 3�� ������, ������ ��ü��Ÿ Ȳ�� �ٷ���, ���� ���� 2�� ȹ���(3�ð�), ���� ���� 2�� ȹ���(7��), �� ���� 2�� ȹ���(3�ð�), ������ Ź�� ������, Ȱ������ ����(���), 700��޳� �� ��������'
  },
  {
    y:260,
    x:270,
    img:'./img/goods/31.png',
    txt:'��ĵ�� ���� ��ȯ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:220,
    x:350,
    img:'./img/goods/32.png',
    txt:'��� �� ��� ���� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:170,
    x:440,
    img:'./img/goods/33.png',
    txt:'���� ���� ��ȭ���� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:120,
    x:510,
    img:'./img/goods/34.png',
    txt:'30��� ���̶� Ư�� ��� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  },
  {
    y:70,
    x:600,
    img:'./img/goods/35.png',
    txt:'����� �縶�� �޴ٸ� ���� 2�� ȹ�� ���ɴ�� ��ǰ������ �������� ���޵Ǿ����ϴ�.'
  }
];

var dicePosition =[0, -136, -272, -408, -544, -680];
var horsePosition = 0; // ���� ���� �ǿ����� index ��
var horseTotalMoveNumber = 0; // ���̵� �� ĭ��
var numberCompletions = 0; // ���� Ƚ��
var numberDiceChance = 20; // �ֻ��� ��밡�� Ƚ��
var numberDice = 0;

function setDiceChance() {
  $('.inner_dice .num_txt').html(numberDiceChance);
}

function setHorsePosition(number) {
  var movedPositionNumber = horsePosition + number;//number �ֻ�������, ���� ������ ������ ��
  horseTotalMoveNumber += movedPositionNumber; // ���� �� �̵� Ƚ��
// 36�̻��϶� 0���� �ٽý����ϴ��� üũ�غ���
  if(movedPositionNumber >= data.length) { //���� ���� ������ ������ ���� ���� �� ���� Ŭ ���
    horsePosition = movedPositionNumber - data.length; //���� ������ ������ ���� ũ�� ��ŭ �� ��ġ�� ���� ���� ��ġ�� �ȴ�.
    numberCompletions++; //���ǹ̴� ���� �ѹ����� ���Ҵٴ� �ǹ̰� �Ǵϱ� ���� Ƚ���� 1 ���� ��Ų��.
  }else{
    horsePosition = movedPositionNumber; //���� ������ �������� ���� �� ���� ������ �׳� ���� �̵��� ��ġ�̴�.
  }
}

function running(callback) { //Ŭ��
  setHorsePosition(numberDice);
  horseMove(horsePosition);
  setTimeout(function(){
    callback();
  },1000)
}

function randomDiceNumber() {  // �����ֻ������� 1~6
  numberDice = Math.ceil(Math.random()*6);
  return numberDice;
}

function renderDice(index){
  $('.ico_num').css({
    'background-position': "0px " + dicePosition[index]+"px"
  });
}

function renderRandomDice(){  // �����ֻ��� �����ǿ� index ��
  renderDice(randomDiceNumber()-1);
}

function dicePlay(callback) {
  var cnt = 0, max = 15;
  var interval = setInterval(function(){
    renderRandomDice();
    if(cnt++ >= max){
      clearInterval(interval);
      callback && callback();
    }
    // cnt++
  },64);
}

function horseMove(index) {
  $(".ico_horse").css({left:data[index].x,top:data[index].y});
}

function showDice() {
  $('.btn_dice').css({'display' : 'none'});
  $('.dice_on').css({'display' : 'block'});
}
function hideDice() {
  $('.dice_on').css({'display' : 'none'});
  $('.btn_dice').css({'display' : 'block'});
}

var horse = {
  running: function () {},


};

var dice = {
  set: function () {},
  show: function () {},
  hide: function () {},
  play: function (callback) {},
  render: function (index) {}
};

var popup = {
  show: function () {},
  hide: function () {},
  changeImg: function (index) {}
};


function showPopup() {
  $('.popup_mable').css({'display' : 'block'});
}

function hidePopup() {
  $('.popup_mable').css({'display' : 'none'});
}

function changePopupImg(index) {
  if(index >= data.length) return; //���߿� �ű�
  $('.area_goods img').attr(
    {
      'src' : data[index].img,
      'alt' : data[index].txt
    });
}







$(function(){
  setDiceChance();
  $('.btn_dice').click(function(){
    if(numberDiceChance <= 0) {
      alert('���� �ֻ����� �����ϴ�.');
      return;
    }
    numberDiceChance -= 1;
    setDiceChance();
    showDice();
    dicePlay(function() {
      running(function() {
        showPopup();
        changePopupImg(horsePosition);
      });
    });

  });
  $('.btn_identify').click(function(){
    hidePopup();
    hideDice();
  });
});




