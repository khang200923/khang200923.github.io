const moreDef =
`
The word "<span class="cool-transition" cool-trans="more"></span>" is a common English word that has a variety of meanings and uses.
It can be used as an <span class="cool-transition" cool-trans="adjective|  adverb |   noun  | pronoun "></span>.
As an adjective, it is used to describe a greater amount, quantity, or degree of something.
For example, "I need <span class="cool-transition" cool-trans="more"></span> time to finish my work."
As an adverb, it is used to indicate an increase in degree or intensity.
For example, "She spoke <span class="cool-transition" cool-trans="more"></span> softly."
As a noun, it refers to a greater amount or additional quantity of something.
For example, "I want <span class="cool-transition" cool-trans="more"></span> of that delicious cake."
As a pronoun, it refers to a greater amount or additional quantity of something without specifying what that something is.
For example, "I need <span class="cool-transition" cool-trans="more"></span>."
Overall, "<span class="cool-transition" cool-trans="more"></span>" is a versatile word that is used extensively in English language to convey a wide range of meanings and ideas.
`
function giveMoreDef() {
    const res = document.createElement('span');
    yep = document.getElementById('holy-hell');
    yep.parentNode.replaceChild(res, yep);
    res.innerHTML = moreDef;
}

const transitionMid = `ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƒƠơƯưǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǺǻǼǽǾǿȘșȚț`

function chooseTransMid() {
    return transitionMid.charAt(Math.floor(Math.random() * transitionMid.length));
}

function calcTrans(start, end, mode) {
    if (mode > 1/3 && mode < 2/3) {
        let res = '';
        for(let i=0;i<Math.floor(start.length * (2 - mode*3) + end.length * (mode*3 - 1));i++) {
            res += chooseTransMid()
        }
        return res;
    }
    let res = '';
    if (mode <= 1/3) {
        for(let i=0;i<start.length;i++) {
            res += Math.random() < mode*3 ? chooseTransMid() : start[i];
        }
    }
    if (mode >= 2/3) {
        for(let i=0;i<end.length;i++) {
            res += Math.random() < (3 - mode*3) ? chooseTransMid() : end[i];
        }
    }
    return res;
}

async function coolTransition() {
    const startTime = performance.now();
    const getTime = () => (performance.now() - startTime) / 1000
    setInterval(() => {
        let elements = document.getElementsByClassName('cool-transition');
        for(let i=0;i<elements.length;i++){
            let mode = (getTime()) % 2 < 1 ? 0 : (getTime()) % 2 - 1;
            let texts = elements[i].getAttribute("cool-trans").split('|');
            if (mode == 0) {
                elements[i].innerHTML = Array.from(texts[Math.floor(((getTime()) / 2) % texts.length)]).map(
                    (chr) => chr == ' ' ? '&nbsp;' : chr
                ).join('');
            } else {
                let startText = texts[Math.floor(((getTime()) / 2) % texts.length)]
                let endText = texts[Math.floor(((getTime()) / 2 + 1) % texts.length)];
                elements[i].innerHTML = Array.from(calcTrans(startText, endText, mode)).map(
                    (chr) => chr == ' ' ? '&nbsp;' : chr
                ).join('');
            }
        }
    }, 33);
}

coolTransition();
