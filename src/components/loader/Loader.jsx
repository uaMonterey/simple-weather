import BounceLoader from 'react-spinners/BounceLoader'

const styles = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }

const Loader = ({ loading }) => {
  return (
    <div>
      <BounceLoader loading={loading} color="red" size="250" css={styles} />
    </div>
  )
}

export default Loader
