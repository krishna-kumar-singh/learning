function reactRender(reactTag,container){
    const tags=document.createElement(reactTag.tag);
    for(const prop in reactTag.props){
        tags.setAttribute(prop,reactTag.props[prop]);
        container.appendChild(tags)
    }
}

const reactTag={
    tag:'input',
    props:{
        type:'password',
        placeholder:'enter password'
    }

}
const root=document.querySelector('#root')

reactRender(reactTag,root);


