document.querySelector('#convert-btn').addEventListener('click',convertText);
function convertText(){
    let text = document.querySelector('#text').value.toLowerCase().split(/[.\-=/_]/);
    document.querySelector('#text').value="";
    document.querySelector('#camel-case').innerText=camelCase(text);
    document.querySelector('#pascal-case').innerText=pascalCase(text);
    document.querySelector('#snake-case').innerText=snakeCase(text);
    document.querySelector('#screaming-snake-case').innerText=screamingSnakeCase(text);
    document.querySelector('#kebab-case').innerText=kebabCase(text);
    document.querySelector('#screaming-kebab-case').innerText=screamingKebabCase(text);
}

function camelCase(text){
    let ans="";
    for(let i in text)
    {
        if(i>0)
        {
            ans+=text[i].charAt(0).toUpperCase()+text[i].slice(1);
        }
        else ans+=text[i];
    }
    
    return ans;
}

function pascalCase(text){
    let ans="";
    for(let i in text)
    {
         ans+=text[i].charAt(0).toUpperCase()+text[i].slice(1); 
    }
    return ans;
}

function snakeCase(text){
    let ans="";

    for(let i in text)
    {
        if(i<text.length-1)
        {
            ans+=text[i]+'_';
        }
        else ans+=text[i];
    }
    return ans;
}

function screamingSnakeCase(text){
    let ans="";

    for(let i in text)
    {
        if(i<text.length-1)
        {
            ans+=text[i].toUpperCase()+'_';
        }
        else ans+=text[i].toUpperCase();
    }
    return ans;

}

function kebabCase(text){
    let ans="";

    for(let i in text)
    {
        if(i<text.length-1)
        {
            ans+=text[i]+'-';
        }
        else ans+=text[i];
    }
    return ans;

}
function screamingKebabCase(text){
    let ans="";

    for(let i in text)
    {
        if(i<text.length-1)
        {
            ans+=text[i].toUpperCase()+'-';
        }
        else ans+=text[i].toUpperCase();
    }
    return ans;

}