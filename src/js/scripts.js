// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const TaipeiCityInfo = document.querySelector('#TaipeiCity');
const NewTaipeiInfo = document.querySelector('#NewTaipei');
const HualienInfo = document.querySelector('#Hualien');
const NantouInfo = document.querySelector('#Nantou');
const TaitungInfo = document.querySelector('#Taitung');
const KaohsiungInfo = document.querySelector('#Kaohsiung');
const PintungInfo = document.querySelector('#Pintung');
const YilanInfo = document.querySelector('#Yilan');
const TainanInfo = document.querySelector('#Tainan');
const MiaoliInfo = document.querySelector('#Miaoli');
const ChiayiInfo = document.querySelector('#Chiayi');
const HsinchuInfo = document.querySelector('#Hsinchu');
const YunlinInfo = document.querySelector('#Yunlin');
const TaoyuanInfo = document.querySelector('#Taoyuan');
const ZhanghuaInfo = document.querySelector('#Zhanghua');
const KeelungInfo = document.querySelector('#Keelung');
const HsinchuCityInfo = document.querySelector('#HsinchuCity');
const ChiayiCityInfo = document.querySelector('#ChiayiCity');
const TaichungInfo = document.querySelector('#Taichung');

//
function showInformation() {
	// First, hide everything that is currently being shown.
	const shownItems = document.querySelectorAll('.show');

	for (item of shownItems) {
		item.classList.remove('show');
	}

	// "this" refers to the item that was clicked.
	// We can use it to look at what the ID of the path we clicked is.
	// Then, we can use that to see which information to pull up.
	const infoAside = document.querySelector(`#info-${this.id}`);
	infoAside.classList.toggle("show");
}

// Tell each country what function to run on click
TaipeiCityInfo.addEventListener("click", showInformation);
NewTaipeiInfo.addEventListener("click", showInformation);
HualienInfo.addEventListener("click", showInformation);
NantouInfo.addEventListener("click", showInformation);
TaitungInfo.addEventListener("click", showInformation);
KaohsiungInfo.addEventListener("click", showInformation);
PintungInfo.addEventListener("click", showInformation);
YilanInfo.addEventListener("click", showInformation);
TainanInfo.addEventListener("click", showInformation);
MiaoliInfo.addEventListener("click", showInformation);
ChiayiInfo.addEventListener("click", showInformation);
HsinchuInfo.addEventListener("click", showInformation);
YunlinInfo.addEventListener("click", showInformation);
TaoyuanInfo.addEventListener("click", showInformation);
ZhanghuaInfo.addEventListener("click", showInformation);
KeelungInfo.addEventListener("click", showInformation);
HsinchuCityInfo.addEventListener("click", showInformation);
ChiayiCityInfo.addEventListener("click", showInformation);
TaichungInfo.addEventListener("click", showInformation);

