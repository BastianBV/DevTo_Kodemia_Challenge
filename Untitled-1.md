// ! Requerimientos
/*
 * Utilizar como base el reto de maquetedo dev.to -> continuarlo
 * 1 - Generar un CRUD -> Ver listado de posts, interior de posts, editar y eliminar post
 *  Create -> crear un formulario para crear los posts de dev to                                            *** POST ***
 *  Read   -> Listas todos los posts creados                                                                 'GET'
 *  Update -> Crear una fomrulario para actualizar un Post especifico                                       'UPDATE'
 *  Delete -> En la parte de edicion del post, Agregar un boton de eliminar que elimine el Post             'DELETE'
 *
 *
 * 2 - Usar Firebase 'ligar todo en url de FireBase'
 * Crear una nueva cuenta en firebase
 * Ruta firebase
 *  Tod0s los posts /posts/.json
 *  Un solo Post /posts/${idPost}.json
 *
 *
 * 3 - Usar bootstrap                                                    'Ya lo tenemos'  'copiar del index y pasar a innerHtml'
 *
 *
 * 4- Trabajar con la metodologia Gitflow                                 'ESta listo'
 * Todo en un nuevo repositorio
 *      Ramas:
 *          main
 *          develop
 *          --features
 *              git checkout -b feature/form_post_create
 *
 *
 * 5. Despliegue -> https://vercel.com                                     'Ya esta ligado en Vercel.com'
 *
 *
 *
 * 6. Extra
 * Organizar de forma limpia la estructura del proyecto, agregar comentarios si es posible
 * Reference text editor ->  https://quilljs.com/
 * Reference tags input -> https://www.jqueryscript.net/tags.php?/tags%20input
 *
 *
 * Happy coding!!!!!!
* Scroll infinito                                                            'Scroll, hacerle logica de mostrar otra card en ciertos px'
* Busqueda                                                                   'Hacer un filtrado' 
* Filtrado por tab de listado                                                '...'
* Reaccion en listado a boton "save"                                         ' Hacer que el post al darle Save , aparezca Seved y con un mouse in se vea Unseave y el marco del post se vea azul'
* Contabilidad real de reacciones                                            '...'
* Comentarios y registo de los mismo en los posts                            '...'
*
*
*


// <link href="https://cdn.quilljs.com/1.2.6/quill.snow.css" rel="stylesheet">
// <script src="https://cdn.quilljs.com/1.2.6/quill.min.js"></script>

var quill = new Quill('#editor', {
  modules: {
    toolbar: '#toolbar'
  },
  theme: 'snow'
});


*/
// ! Ejemplos post object
//  let post = {
//     title: 'titulo del post',
//     content: 'contenido del post ....',
//     tags: 'lorem, lorem, lorem',
//     urlCoverImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--f9PeJcAd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/52ohyn4pzhpehxxq2s55.jpg',
//     author: 'Cris',
//     createdDate: '2022-06-16',
//     mintoread: 3,
//     avatarAuthor: 'https://res.cloudinary.com/practicaldev/image/fetch/s--3xRt7osW--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/395121/4dd73e99-88c7-4886-b485-cd246beaaf92.jpg'
//     isSaved: true
//     comment: {commnet1:asdasd }
// }




Ideas 

En el boton Publish agregar un  

                                const button = document.querySelector('#exampleInputPassword1') 

                                    button.addEvenListener('Click',()={
                                        const newPost = {
                                            title: '',
                                            tags:'',
                                            body:'',
                                            userId:''
                                        }
                                    });