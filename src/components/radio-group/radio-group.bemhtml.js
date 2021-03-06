block('radio-group')(
    content()(function() {
        'use strict';
        
        var mods = this.mods,
            ctx = this.ctx,
            isValDef = typeof ctx.val !== 'undefined';

        const React = require('react');
        const Radio = require('../components/radio/radio');

        return (ctx.options || []).map(function(option, i) {
            return [
                !!i && !mods.type && { tag : 'br' },
                React.createElement(Radio, {
                    theme: mods.theme,
                    size: mods.size,
                    type: mods.type,
                    checked: isValDef && ctx.val === option.val,
                    disabled: option.disabled || mods.disabled,
                    name: ctx.name,
                    val: option.val,
                    text: option.text,
                    title: option.title,
                    icon: option.icon
                })
            ];
        });
    })
);
