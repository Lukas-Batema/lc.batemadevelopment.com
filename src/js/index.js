import Embed from 'flat-embed'; // Import Flat Embed JS API (https://flat.io/developers/ for documentation)

module.exports = {
  name: 'Flat Embed',
  description: 'Embeds my best Flat.io Score',
  async flatEmbed() {
    const container = document.getElementById('embed-container');
    const embed = new Embed(container, {
      score: '624e10152478a20013ba7f1f',
      embedParams: {
        appId: '624f5a8970b5720013343c83',
        controlsPosition: 'bottom',
      }
    });
  },
};