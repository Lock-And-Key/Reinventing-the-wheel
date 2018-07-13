function createElement(vnode) {
    var tag = vnode.tag  // 'ul'
    var attrs = vnode.attrs || {}
    var children = vnode.children || []
    if (!tag) {
        return null
    }

    var elem = document.createElement(tag)
    var attrName
    for (attrName in attrs) {
        if (attrs.hasOwnProperty(attrName)) {
            elem.setAttribute(attrName, attrs[attrName])
        }
    }
    children.forEach(function (childVnode) {
        elem.appendChild(createElement(childVnode))
    })

    return elem
}