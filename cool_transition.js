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
            res += Math.random() < (mode*3)**2 ? chooseTransMid() : start[i];
        }
    }
    if (mode >= 2/3) {
        for(let i=0;i<end.length;i++) {
            res += Math.random() < (3 - mode*3)**2 ? chooseTransMid() : end[i];
        }
    }
    return res;
}

async function coolTransition() {
    const startTime = performance.now();
    const getTime = () => (performance.now() - startTime) / 1000
    setInterval(() => {
        let elements = document.getElementsByClassName('cool-transition');
        for (let i=0;i<elements.length;i++) {
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

//Mains
coolTransition();
document.getElementById("main").classList.remove("hidden");
