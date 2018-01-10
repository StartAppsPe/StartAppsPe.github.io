
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { 
        images[item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '')] = r(item);
        return '';
    });
    return images;
}
  
export const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  