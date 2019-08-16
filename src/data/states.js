const states = new Map();
states.set('none', ['Please select a State']);
states.set('USA', [
  { value: 'LA', text: 'Los Angeles' },
  { value: 'NY', text: 'New York' },
  { value: 'DC', text: 'Washington D. C.' }
]);
states.set('ESA', [
  { value: 'SS', text: 'San Salvador' },
  { value: 'SM', text: 'San Miguel' },
  { value: 'CH', text: 'Chalatenango' }
]);

export default states;
