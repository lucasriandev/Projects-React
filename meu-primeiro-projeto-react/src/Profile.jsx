function Profile(parametro) {
  return (
    <div className="profile-card">
      <h2>{parametro.nome}</h2>
      <p>{parametro.cargo}</p>
    </div>
  );
}

export default Profile;
