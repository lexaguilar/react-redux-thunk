const url = 'http://localhost:4001/task';
export default {
    get: () => fetch(url).then(resp => resp.json()),
    insert: nombre => fetch(url, {method: 'POST',body: JSON.stringify({nombre}),headers:{ 'Content-Type': 'application/json'}}).then(res => res.json())
    
}