document.getElementById("info").style.visibility = "hidden";

function cod(s) {
    switch(s) {
    case 'e':
        return 'enter';
    case 'i':
        return 'imes';
    case 'a':
        return 'ai';
    case 'o':
        return 'ober';
    case 'u':
        return 'ufat';
    default :
        return s;
    }
  }

  function encriptar(s) 
  {
    var resp = '';

    for (const c of s) 
    {

        resp += cod(c);
    }

    return resp;
  }
  
  function desencriptar(s) 
  {
    var resp = '';
    for (var j = 0; j < s.length;j++) 
    {
      switch(s[j]) 
      {
      case 'a': 
        if (s[j + 1] === 'i') 
        {
            resp += 'a'; j += 1; 
        }
        else 
        { 
            return false; 
        }
        break;
      case 'e': 
        if (s[j + 4] === 'r') 
        {
            resp += 'e'; j += 4; 
        }
        else 
        {
            return false; 
        }
        break;
      case 'i': 
        if (s[j + 3] === 's') 
        { 
            resp += 'i'; j += 3; 
        }
        else 
        { 
            return false; 
        }
        break;
      case 'o': 
        if (s[j + 3] === 'r') 
        {
            resp += 'o'; j += 3; 
        }
        else 
        { 
            return false; 
        }
        break;
      case 'u': 
        if (s[j + 3] === 't') 
        { 
            resp += 'u'; j += 3; 
        }
        else 
        { 
            return false; 
        }
        break;
      default:
        resp += s[j];
      }
    }
    return resp;
  }

function alertCopy()
{
    Swal.fire({
    icon: 'success',
    title: 'Copiado con exito',
    showConfirmButton: false,
    timer: 1500
    })
}

function btnEncriptar() 
{
    var s = document.getElementById("txt-principal").value;
    if(s.trim() === "")
    {
        document.getElementById("info-inicial").style.visibility = "visible";
        document.getElementById("info").style.visibility = "hidden";
    }
    else 
    {
        document.getElementById("txt-secundario").value = encriptar(s);
        document.getElementById("info-inicial").style.visibility = "hidden";
        document.getElementById("info").style.visibility = "visible";
    }
}

function btnDesencriptar() 
{
    var s = document.getElementById("txt-principal").value;
    if(s.trim() === "")
    {
        document.getElementById("info-inicial").style.visibility = "visible";
        document.getElementById("info").style.visibility = "hidden";
    }
    else 
    {
        if(desencriptar(s) === false)
        {
            document.getElementById("txt-secundario").value = s;
        }
        else 
        {
            document.getElementById("txt-secundario").value = desencriptar(s);
        }
        document.getElementById("info-inicial").style.visibility = "hidden";
        document.getElementById("info").style.visibility = "visible";
    }
}

function copiar()
{
    navigator.clipboard.writeText(document.getElementById("txt-secundario").value)
    alertCopy();
}