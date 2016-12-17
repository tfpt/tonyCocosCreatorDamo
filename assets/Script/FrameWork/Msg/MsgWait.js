var MsgMask = require('./MsgMask');
/**
 * 功能：等待界面
 * 作者：tony
 * 时间：2016-12-14
 */
window.MsgWait = cc.Class({
    extends: MsgMask,
    properties: { 
             
    },

    getClassName:function(){
        return 'MsgWait';
    },

    update : function(){
        if(this.isWaitTimeOut()){
            MsgTextPrompt.createByGameWorld('com_timeout');
            this.close();
        }
    },

    onLoad : function(){
        this._super();
        this.startTime = new Date();  
        this.waitTime = PlanApi.PlanGameConfig.getValue('waitTime');
    },

    //是否连接超时
    isWaitTimeOut : function(){
        var currData = new Date();  
        var tmpData =  currData.getTime() - this.startTime.getTime();      
        return ( tmpData > this.waitTime*1000 );
    }
});

//创建弹框
MsgWait.create = function( text )
{ 
     MgMsg.Inst().createComponent('MsgWait'); 
};
 