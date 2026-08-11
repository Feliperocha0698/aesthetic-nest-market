const clientToken = import.meta.env.VITE_PAYMENTS_CLIENT_TOKEN;

export function PaymentTestModeBanner() {
  if (!clientToken) {
    return (
      <div className="w-full bg-destructive/10 border-b border-destructive/30 px-4 py-2 text-center text-sm text-destructive">
        Checkout de produção ainda não configurado. Conclua a ativação de pagamentos para receber
        pagamentos reais.
      </div>
    );
  }
  if (clientToken.startsWith("pk_test_")) {
    return (
      <div className="w-full bg-secondary/20 border-b border-secondary/40 px-4 py-2 text-center text-sm text-primary">
        Ambiente de teste: nenhum pagamento real é cobrado na pré-visualização.
      </div>
    );
  }
  return null;
}
