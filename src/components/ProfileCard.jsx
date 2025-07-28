export default function ProfileCard({ name, role, avatar, status }) {
  const fallbackAvatar = 'https://via.placeholder.com/150';
  const isOnline = status === 'online';

  const statusStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid white',
    backgroundColor: isOnline ? 'green' : 'gray',
    position: 'absolute',
    bottom: '6px',
    right: '6px',
  };

  const avatarWrapperStyle = {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '16px',
  };

  const cardStyle = {
    width: '260px',
    padding: '16px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    position: 'relative',
  };

  const avatarStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <div style={cardStyle}>
      <div style={avatarWrapperStyle}>
        <img
          src={avatar || fallbackAvatar}
          alt={name}
          style={avatarStyle}
        />
        <span style={statusStyle} title={isOnline ? 'Online' : 'Offline'} />
      </div>
      <h2 style={{ fontSize: '18px', fontWeight: '600' }}>{name}</h2>
      <p style={{ fontSize: '14px', color: '#555' }}>{role}</p>
    </div>
  );
}
