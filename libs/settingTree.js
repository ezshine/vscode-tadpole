const vscode = require('vscode');
const os = require('os');
const path = require('path');
const axios = require("axios");

class SettingTree {
    constructor(context){
        this.context = context;
        this.userRoot = os.homedir();
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }
    getTreeItem(element){
        return element;
    }
    async getChildren(element) {

        var r_cates = [
            {
                title:"蝌蚪池塘",
                icon:"icon_chat.svg",
                url:"http://www.rainbow1024.com/ilovejuejin/kedou/",
                target:"kedou"
            },
            {
                title:"解压游戏",
                icon:"icon_game.svg",
                url:"",
                view:"game",
                target:"game"
            },
            {
                title:"关注插件作者",
                icon:"icon_fire.svg",
                url:"https://juejin.cn/user/2955079655898093"
            },
            {
                title:"反馈 & 建议",
                icon:"icon_like.svg",
                url:"https://juejin.cn/post/6910962718891573255"
            },
            {
                title:"加入插件交流群",
                icon:"icon_dingtalk.svg",
                url:"",
                view:"group",
                target:"default"
            }
        ];
        var a_length = r_cates.length;

        var fin_items = [];
        for(var i = 0;i<a_length;i++){
            var item = r_cates[i];
            fin_items.push(
                new DataItem(
                    item.title,
                    item.icon,
                    "",
                    {
                        command:"tadpole.openSite",title:"",arguments:[item]
                    }
                )
            );
        }

        return fin_items;
    }
}

class DataItem extends vscode.TreeItem{
    constructor(label, icon, tooltip, command) {
        super(label,  vscode.TreeItemCollapsibleState.None);
        this.tooltip = tooltip;
        this.iconPath = path.join(__filename,'../../','resources', icon);
        this.command = command;
    }
}

module.exports = SettingTree;