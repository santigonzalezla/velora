import style from '../HomeApp.module.css'

const BlockUser = () => {
  return (
    <div id={style.BlockUser}>
      <article>
        <h3>El usuario @beautifulmouse112 está bloqueado</h3>
        <span>No podrás ver publicaciones ni notificaciones de @beautifulmouse112</span>
      </article>
    </div>
  );
}

export default BlockUser;
