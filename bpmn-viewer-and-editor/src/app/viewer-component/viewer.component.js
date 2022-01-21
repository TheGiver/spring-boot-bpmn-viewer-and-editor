import BpmnViewer from 'bpmn-js';
import workflow from '../resources/arabworkflow.bpmn'

var viewer = new BpmnViewer({
  container: '#canvas'
});


viewer.importXML('https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn').then(function(result) {

  const { warnings } = result;

  console.log('success !', warnings);

  viewer.get('canvas').zoom('fit-viewport');
}).catch(function(err) {

  const { warnings, message } = err;

  console.log('something went wrong:', warnings, message);
});