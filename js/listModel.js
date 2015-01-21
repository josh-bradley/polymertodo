
Polymer("todo-list",  {
    ready:function(){
        var that = this;
        this.items=[{name:"Build polymer app"},
            {name:"Do the thing", isChecked:true},
            {name:"Do the other thing"}],
            this.addItem = function(e) {
                if(!e.keyCode || e.keyCode === 13 && this.newItemName) {
                    this.items.push({name: this.newItemName});
                    this.newItemName = "";
                }
            };
        this.deleteSingle = function(e){
            that.items = that.items.filter(function(item){ return item.name !== e.target.templateInstance.model.item.name});
        };
        this.edit = function(e){
            that.currentItem = e.target.templateInstance.model.item;
            that.$.editDialog.opened = true;
            that.tempName = that.currentItem.name;
        };
        this.saveItem = function(){
            that.$.editDialog.opened = false;
            that.currentItem.name = that.tempName;
            that.$.store.save();
        };
        this.onChange = function(){
            that.$.store.save();
        };
        this.clearAll = function(){
            that.items = [];
        };
        this.toggleOn = false;
        this.doneAll = function(){
            that.items.forEach(function(i){
                i.isChecked = that.toggleOn;
            });
            that.toggleOn = !that.toggleOn;
        };
    }
});