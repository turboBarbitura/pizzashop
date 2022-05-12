import styles from '../../styles/Order.module.css'
import Image from 'next/image'

const Order = () => {
  const status = 0
  const statusClass = (index) => {
    if (index - status < 1) return styles.done
    if (index - status === 1) return styles.inProgress
    if (index - status > 1) return styles.unDone
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>123123123123</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>Elton st. 212-33 LA</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          {/* Заказ оплачен */}
          <div className={statusClass(0)}>
            <Image
              src="/img/paid.png"
              alt="paid success"
              width={30}
              height={30}
            />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                alt="paid success full"
                width={20}
                height={20}
                className={styles.checkedIcon}
              />
            </div>
          </div>

          {/* Заказ готовится */}
          <div className={statusClass(1)}>
            <Image
              src="/img/bake.png"
              alt="paid success"
              width={30}
              height={30}
            />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                alt="paid success full"
                width={20}
                height={20}
                className={styles.checkedIcon}
              />
            </div>
          </div>

          {/* Заказ в пути */}
          <div className={statusClass(2)}>
            <Image
              src="/img/bike.png"
              alt="paid success"
              width={30}
              height={30}
            />
            <span>On the Way</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                alt="paid success full"
                width={20}
                height={20}
                className={styles.checkedIcon}
              />
            </div>
          </div>
          {/* Заказ доставлен */}
          <div className={statusClass(3)}>
            <Image
              src="/img/delivered.png"
              alt="paid success"
              width={30}
              height={30}
            />
            <span>Deliveret</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/img/checked.png"
                alt="paid success full"
                width={20}
                height={20}
                className={styles.checkedIcon}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  )
}

export default Order
