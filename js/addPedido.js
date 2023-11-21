let orderCounter = 1;

function addOrderForm() {
  const container = document.getElementById('orderFormsContainer');
  const orderForm = document.createElement('div');
  orderForm.classList.add('order-form');
  orderForm.innerHTML = `
    <section class="contact-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <h2 class="contact-title">Pedido ${orderCounter}</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="product_${orderCounter}"><h6>Tipo de carne</h6></label>
                                <select class="form-control" name="product_${orderCounter}" id="product_${orderCounter}" aria-label="Tipo de carne">
                                    <option selected disabled>Selecione o tipo de carne</option>
                                    <option value="sol">Carne de Sol</option>
                                    <option value="frango">Frango</option>
                                    <option value="moida">Carne Moída</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="quantity_${orderCounter}"><h6>Quantidade</h6></label>
                                <input class="form-control" name="quantity_${orderCounter}" id="quantity_${orderCounter}" type="number" placeholder="Quantidade" required>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label for="observation_${orderCounter}"><h6>Observações</h6></label>
                                <textarea class="form-control" name="observation_${orderCounter}" id="observation_${orderCounter}" cols="30" rows="6" placeholder="Digite suas observações"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
  container.appendChild(orderForm);
  orderCounter++;
   
}
