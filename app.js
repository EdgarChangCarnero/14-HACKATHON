async function getInfo(){
    //const users = await fetch ('http://localhost:3000/users');
    const users = await fetch ('https://jsonplaceholder.typicode.com/users');
    const user = await users.json();   
    try {
        let user1 = '',
            user2 = '',
            user3 = '',
            user4 = '',
            user5 = '',
            user6 = '',
            user7 = '',
            user8 = '',
            user9 = '',
            user10 = '',
            cont = 0;
        user.forEach((post)=>{
            switch (cont) {
                case 0:
                    cont++;
                        user1 += ` 
                        <div>
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                            <img style="width: 10%;" src="./img/editar1.png" onMouseover="src='./img/editar2.png'" onMouseout="src='./img/editar1.png'" alt="Editar">
                                <div class="borrar-user" id='deleteUser1' style="width: 10%">x</div>
                            </div>
                                <br><img src="https://lamenteesmaravillosa.com/wp-content/uploads/2018/09/hombre-creido-pensando-que-sabe.jpg" style="width:200px; height:150px; padding-bottom:1em; object-fit: cover"/></br>
                                <h4><strong>Nombre: </strong>${post.name} | ${post.username}</h4>   
                                <h4><strong>Mail: </strong>${post.email} </h4>
                                <h4><strong>Dirección: </strong>${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}</h4>
                                <h4><strong>Teléfono: </strong>${post.phone}</h4>
                                <h4><strong>Sitio web: </strong>${post.website}</h4>
                                <h4><strong>Compañía: </strong>${post.company.name}, ${post.company.catchPhrase}, ${post.company.bs}</h4>
                        </div>            
                                `;
                break;
                case 1:
                    cont++;
                        user2 += ` 
                        <div>
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                            <img style="width: 10%;" src="./img/editar1.png" onMouseover="src='./img/editar2.png'" onMouseout="src='./img/editar1.png'" alt="Editar">
                                <div class="borrar-user" id="deleteUser2" style="width: 10%;">x</div>
                            </div>
                                <br><img src="https://img.freepik.com/foto-gratis/mira-captura-recortada-atractivo-joven-apuesto-emocionado-camiseta-azul-que-senala-dedos-arriba-despues-haber-mirado-sorprendido-expresion-alegre-feliz-cara-broadley-sonriendo_176420-10316.jpg?size=626&ext=jpg" style="width:200px; height:150px; padding-bottom:1em; object-fit: cover"/></br>
                                <h4><strong>Nombre: </strong>${post.name} | ${post.username}</h4>   
                                <h4><strong>Mail: </strong>${post.email} </h4>
                                <h4><strong>Dirección: </strong>${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}</h4>
                                <h4><strong>Teléfono: </strong>${post.phone}</h4>
                                <h4><strong>Sitio web: </strong>${post.website}</h4>
                                <h4><strong>Compañía: </strong>${post.company.name}, ${post.company.catchPhrase}, ${post.company.bs}</h4>
                        </div>            
                                `;
                break;
                case 2:
                    cont++;
                        user3 += ` 
                        <div>
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                                <img style="width: 10%;" src="./img/editar1.png" onMouseover="src='./img/editar2.png'" onMouseout="src='./img/editar1.png'" alt="Editar">
                                <div class="borrar-user" id="deleteUser3" style="width: 10%;">x</div>
                            </div>
                                <br><img src="https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?size=626&ext=jpg" style="width:200px; height:150px; padding-bottom:1em; object-fit: cover"/></br>
                                <h4><strong>Nombre: </strong>${post.name} | ${post.username}</h4>   
                                <h4><strong>Mail: </strong>${post.email} </h4>
                                <h4><strong>Dirección: </strong>${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}</h4>
                                <h4><strong>Teléfono: </strong>${post.phone}</h4>
                                <h4><strong>Sitio web: </strong>${post.website}</h4>
                                <h4><strong>Compañía: </strong>${post.company.name}, ${post.company.catchPhrase}, ${post.company.bs}</h4>
                        </div>            
                                `;
                break;
                case 3:
                    cont++;
                        user4 += ` 
                        <div>
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                                <img style="width: 10%;" src="./img/editar1.png" onMouseover="src='./img/editar2.png'" onMouseout="src='./img/editar1.png'" alt="Editar">
                                <div class="borrar-user" id="deleteUser4" style="width: 10%;">x</div>
                            </div>
                                <br><img src="https://kchcomunicacion.com/wp-content/uploads/2020/06/daniela-kreimer.jpg" style="width:200px; height:150px; padding-bottom:1em; object-fit: cover"/></br>
                                <h4><strong>Nombre: </strong>${post.name} | ${post.username}</h4>   
                                <h4><strong>Mail: </strong>${post.email} </h4>
                                <h4><strong>Dirección: </strong>${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}</h4>
                                <h4><strong>Teléfono: </strong>${post.phone}</h4>
                                <h4><strong>Sitio web: </strong>${post.website}</h4>
                                <h4><strong>Compañía: </strong>${post.company.name}, ${post.company.catchPhrase}, ${post.company.bs}</h4>
                        </div>            
                                `;
                break;
                case 4:
                    cont++;
                        user5 += ` 
                        <div>
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                                <img style="width: 10%;" src="./img/editar1.png" onMouseover="src='./img/editar2.png'" onMouseout="src='./img/editar1.png'" alt="Editar">
                                <div class="borrar-user" id="deleteUser5" style="width: 10%;">x</div>
                            </div>
                                <br><img src="https://image.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg" style="width:200px; height:150px; padding-bottom:1em; object-fit: cover"/></br>
                                <h4><strong>Nombre: </strong>${post.name} | ${post.username}</h4>   
                                <h4><strong>Mail: </strong>${post.email} </h4>
                                <h4><strong>Dirección: </strong>${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}</h4>
                                <h4><strong>Teléfono: </strong>${post.phone}</h4>
                                <h4><strong>Sitio web: </strong>${post.website}</h4>
                                <h4><strong>Compañía: </strong>${post.company.name}, ${post.company.catchPhrase}, ${post.company.bs}</h4>
                        </div>            
                                `;
                break;
                case 5:
                    cont++;
                        user6 += ` 
                        <div>
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                                <img style="width: 10%;" src="./img/editar1.png" onMouseover="src='./img/editar2.png'" onMouseout="src='./img/editar1.png'" alt="Editar">
                                <div class="borrar-user" id="deleteUser6" style="width: 10%;">x</div>
                            </div>
                                <br><img src="https://eststatic.com/2676/conversions/malas-personas-default.jpg" style="width:200px; height:150px; padding-bottom:1em; object-fit: cover"/></br>
                                <h4><strong>Nombre: </strong>${post.name} | ${post.username}</h4>   
                                <h4><strong>Mail: </strong>${post.email} </h4>
                                <h4><strong>Dirección: </strong>${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}</h4>
                                <h4><strong>Teléfono: </strong>${post.phone}</h4>
                                <h4><strong>Sitio web: </strong>${post.website}</h4>
                                <h4><strong>Compañía: </strong>${post.company.name}, ${post.company.catchPhrase}, ${post.company.bs}</h4>
                        </div>            
                                `;
                break;
                case 6:
                    cont++;
                        user7 += ` 
                        <div>
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                                <img style="width: 10%;" src="./img/editar1.png" onMouseover="src='./img/editar2.png'" onMouseout="src='./img/editar1.png'" alt="Editar">
                                <div class="borrar-user" id="deleteUser7" style="width: 10%;">x</div>
                            </div>
                                <br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTiZeTlkYyoSzYcCr6BT6VUbe-059VWhNOlI6Es7mMXYrm5YgUUAOMNdP5gu9ygMl89I&usqp=CAU" style="width:200px; height:150px; padding-bottom:1em; object-fit: cover"/></br>
                                <h4><strong>Nombre: </strong>${post.name} | ${post.username}</h4>   
                                <h4><strong>Mail: </strong>${post.email} </h4>
                                <h4><strong>Dirección: </strong>${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}</h4>
                                <h4><strong>Teléfono: </strong>${post.phone}</h4>
                                <h4><strong>Sitio web: </strong>${post.website}</h4>
                                <h4><strong>Compañía: </strong>${post.company.name}, ${post.company.catchPhrase}, ${post.company.bs}</h4>
                        </div>            
                                `;
                break;
                case 7:
                    cont++;
                        user8 += ` 
                        <div>
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                                <img style="width: 10%;" src="./img/editar1.png" onMouseover="src='./img/editar2.png'" onMouseout="src='./img/editar1.png'" alt="Editar">
                                <div class="borrar-user" id="deleteUser8" style="width: 10%;">x</div>
                            </div>
                                <br><img src="https://www.isesinstituto.com/sites/default/files/istock-1158245282.jpg" style="width:200px; height:150px; padding-bottom:1em; object-fit: cover"/></br>
                                <h4><strong>Nombre: </strong>${post.name} | ${post.username}</h4>   
                                <h4><strong>Mail: </strong>${post.email} </h4>
                                <h4><strong>Dirección: </strong>${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}</h4>
                                <h4><strong>Teléfono: </strong>${post.phone}</h4>
                                <h4><strong>Sitio web: </strong>${post.website}</h4>
                                <h4><strong>Compañía: </strong>${post.company.name}, ${post.company.catchPhrase}, ${post.company.bs}</h4>
                        </div>            
                                `;
                break;
                case 8:
                    cont++;
                        user9 += ` 
                        <div>
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                                <img style="width: 10%;" src="./img/editar1.png" onMouseover="src='./img/editar2.png'" onMouseout="src='./img/editar1.png'" alt="Editar">
                                <div class="borrar-user" id="deleteUser9" style="width: 10%;">x</div>
                            </div>
                                <br><img src="https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg" style="width:200px; height:150px; padding-bottom:1em; object-fit: cover"/></br>
                                <h4><strong>Nombre: </strong>${post.name} | ${post.username}</h4>   
                                <h4><strong>Mail: </strong>${post.email} </h4>
                                <h4><strong>Dirección: </strong>${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}</h4>
                                <h4><strong>Teléfono: </strong>${post.phone}</h4>
                                <h4><strong>Sitio web: </strong>${post.website}</h4>
                                <h4><strong>Compañía: </strong>${post.company.name}, ${post.company.catchPhrase}, ${post.company.bs}</h4>
                        </div>            
                                `;
                break;
                case 9:
                    cont++;
                        user10 += ` 
                        <div>
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                                <img style="width: 10%;" src="./img/editar1.png" onMouseover="src='./img/editar2.png'" onMouseout="src='./img/editar1.png'" alt="Editar">
                                <div class="borrar-user" id="deleteUser10" style="width: 10%;">x</div>
                            </div>
                                <br><img src="https://www.lifeder.com/wp-content/uploads/2018/09/autestima-sonreir-lifeder.jpg" style="width:200px; height:150px; padding-bottom:1em; object-fit: cover"/></br>
                                <h4><strong>Nombre: </strong>${post.name} | ${post.username}</h4>   
                                <h4><strong>Mail: </strong>${post.email} </h4>
                                <h4><strong>Dirección: </strong>${post.address.street}, ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}</h4>
                                <h4><strong>Teléfono: </strong>${post.phone}</h4>
                                <h4><strong>Sitio web: </strong>${post.website}</h4>
                                <h4><strong>Compañía: </strong>${post.company.name}, ${post.company.catchPhrase}, ${post.company.bs}</h4>
                        </div>            
                                `;
                break;
            };
        });    
        
        list1.innerHTML = user1;
        list2.innerHTML = user2;
        list3.innerHTML = user3;
        list4.innerHTML = user4;
        list5.innerHTML = user5;
        list6.innerHTML = user6;
        list7.innerHTML = user7;
        list8.innerHTML = user8;
        list9.innerHTML = user9;
        list10.innerHTML = user10;
    } catch {
        console.log('error');
    }
};
getInfo();
const listUser = document.querySelector('#listar-user');
let articleUser = [];
const containerUser = document.querySelector('#flex');
const deleteUser1 = document.querySelector('#deleteUser1');
const deleteUser2 = document.querySelector('#deleteUser2');
const deleteUser3 = document.querySelector('#deleteUser3');
const deleteUser4 = document.querySelector('#deleteUser4');
const deleteUser5 = document.querySelector('#deleteUser5');
const deleteUser6 = document.querySelector('#deleteUser6');
const deleteUser7 = document.querySelector('#deleteUser7');
const deleteUser8 = document.querySelector('#deleteUser8');
const deleteUser9 = document.querySelector('#deleteUser9');
const deleteUser10 = document.querySelector('#deleteUser10');
cargarListeners();
function cargarListeners() {
    listUser.addEventListener('click', addUser);
    deleteUser1.addEventListener('click', deleteUser);
    deleteUser2.addEventListener('click', deleteUser);
    deleteUser3.addEventListener('click', deleteUser);
    deleteUser4.addEventListener('click', deleteUser);
    deleteUser5.addEventListener('click', deleteUser);
    deleteUser6.addEventListener('click', deleteUser);
    deleteUser7.addEventListener('click', deleteUser);
    deleteUser8.addEventListener('click', deleteUser);
    deleteUser9.addEventListener('click', deleteUser);    
    deleteUser10.addEventListener('click', deleteUser);
  
};

function addUser(e) {
	e.preventDefault();
	if (e.target.classList.contains('addUser')) {
		let user = e.target.parentElement.previousElementSibling.firstElementChild;       
        leerDatosUser(user);
	}
};
function leerDatosUser(user) {
	const infoUser = {
        imagen: user.querySelector('img').src,
        nombre: user.querySelector('h4').textContent,
        mail: user.querySelector('h4:nth-child(2n)').textContent,
        direccion: user.querySelector('h4:nth-child(4n-1)').textContent,
        telefono: user.querySelector('h4:nth-child(4n)').textContent,
        sitioWeb: user.querySelector('h4:nth-child(5n-1)').textContent,
        compania: user.querySelector('h4:last-child').textContent,
	};
    articleUser = [...articleUser, infoUser];
    insertarCarrito(articleUser);
	function insertarCarrito(user) {
		const row = document.createElement('div');
        row.classList.add( "list" );        
        let cont2 = 10;                
		user.forEach((user) => {
            cont2 +=1;         
			row.innerHTML = ` 
            <div>
                <div style="width: 100%; display: flex; justify-content: space-between;">
                    <img style="width: 10%;" src="./img/editar1.png" onMouseover="src='./img/editar2.png'" onMouseout="src='./img/editar1.png'" alt="Editar">
                    <div class="borrar-user" id="deleteUser10" style="width: 10%;">x</div>
                </div>
                    <br><img src="./img/agregar1.jpg" style="width:200px; height:150px; padding-bottom:1em; object-fit: contain"/></br>
                    <h4><strong>Nombre: </strong>${user.nombre}</h4>   
                    <h4><strong>Mail: </strong>${user.mail} </h4>
                    <h4><strong>Dirección: </strong>${user.direccion}</h4>
                    <h4><strong>Teléfono: </strong>${user.telefono}</h4>
                    <h4><strong>Sitio web: </strong>${user.sitioWeb}</h4>
                    <h4><strong>Compañía: </strong>${user.compania}</h4>
            </div>            
                    `;            
		});          
		containerUser.appendChild(row);
	};
};
function deleteUser(e) {
	e.preventDefault();
    console.log(e.target.classList.contains('borrar-user'))
	if (e.target.classList.contains('borrar-user')) {
		const deleteUser = e.target.parentElement.parentElement.parentElement;
        console.log(deleteUser);
		deleteUser.remove();
	}
};

