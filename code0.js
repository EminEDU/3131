gdjs._304simsiz_32sahneCode = {};
gdjs._304simsiz_32sahneCode.GDBrownBlockObjects1= [];
gdjs._304simsiz_32sahneCode.GDBrownBlockObjects2= [];
gdjs._304simsiz_32sahneCode.GDWalkingEnemyObjects1= [];
gdjs._304simsiz_32sahneCode.GDWalkingEnemyObjects2= [];
gdjs._304simsiz_32sahneCode.GDRedBlockObjects1= [];
gdjs._304simsiz_32sahneCode.GDRedBlockObjects2= [];

gdjs._304simsiz_32sahneCode.conditionTrue_0 = {val:false};
gdjs._304simsiz_32sahneCode.condition0IsTrue_0 = {val:false};
gdjs._304simsiz_32sahneCode.condition1IsTrue_0 = {val:false};


gdjs._304simsiz_32sahneCode.eventsList0 = function(runtimeScene) {

{


gdjs._304simsiz_32sahneCode.condition0IsTrue_0.val = false;
{
gdjs._304simsiz_32sahneCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs._304simsiz_32sahneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs._304simsiz_32sahneCode.GDWalkingEnemyObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs._304simsiz_32sahneCode.GDWalkingEnemyObjects1.length === 0 ) ? 0 :gdjs._304simsiz_32sahneCode.GDWalkingEnemyObjects1[0].getCenterXInScene()), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs._304simsiz_32sahneCode.GDWalkingEnemyObjects1.length === 0 ) ? 0 :gdjs._304simsiz_32sahneCode.GDWalkingEnemyObjects1[0].getCenterYInScene()), "", 0);
}}

}


};

gdjs._304simsiz_32sahneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._304simsiz_32sahneCode.GDBrownBlockObjects1.length = 0;
gdjs._304simsiz_32sahneCode.GDBrownBlockObjects2.length = 0;
gdjs._304simsiz_32sahneCode.GDWalkingEnemyObjects1.length = 0;
gdjs._304simsiz_32sahneCode.GDWalkingEnemyObjects2.length = 0;
gdjs._304simsiz_32sahneCode.GDRedBlockObjects1.length = 0;
gdjs._304simsiz_32sahneCode.GDRedBlockObjects2.length = 0;

gdjs._304simsiz_32sahneCode.eventsList0(runtimeScene);

return;

}

gdjs['_304simsiz_32sahneCode'] = gdjs._304simsiz_32sahneCode;
