import { dpToPixel, heightByScreen, widthByScreen } from "../src/utils/CalculateSize";
import { getImage } from "../src/utils/GetImage";

it("Receive URL value ", () => {
    const imageUrl = getImage({
        id: '0',
        title: 'zemogatest',
    });
    const uriRegEx = /https?:\/\/(?:w{1,3}\.)?[^\s.]+(?:\.[a-z]+)*(?::\d+)?(?![^<]*(?:<\/\w+>|\/?>))/;
    expect(uriRegEx.test(imageUrl)).toBe(true);
})

it('heightByScreen receive a number value ', () => {
    const dps = 8;
    const pixles = heightByScreen(dps);
    expect(/^-?[\d.]+(?:e-?\d+)?$/.test(pixles)).toBe(true);
});

it('widthByScreen receive a number value ', () => {
    const dps = 8;
    const pixles = widthByScreen(dps);
    expect(/^-?[\d.]+(?:e-?\d+)?$/.test(pixles)).toBe(true);
});

it('dpToPixel receive a number value ', () => {
    const dps = 8;
    const pixles = dpToPixel(dps);
    expect(/^-?[\d.]+(?:e-?\d+)?$/.test(pixles)).toBe(true);
});