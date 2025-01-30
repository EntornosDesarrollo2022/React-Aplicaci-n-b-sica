import { useEffect, useState } from "react";

const Comentarios = ({postId}) => {
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        async function fetchComentarios() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const commentList = await res.json();
            setComentarios(commentList);
        }

        fetchComentarios()
    }, [])


    return <details>
        <summary>Comentarios</summary>
        {comentarios.map(comentario =>
        <div key={comentario.id}>
            {comentario.body}
        </div>)}
    </details>

};

export default Comentarios;