package leopardiproject.csd.model;

public class OTPSystemModel {
    private PrenotazioneVisita cellulare;
    private String otp;
    private long expirytime;

    public String getPhone() {
        return cellulare.getCellulare();
    }

    public void setPhone(String cellulare) {
       this.cellulare.setCellulare(cellulare);
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    public long getExpirytime() {
        return expirytime;
    }

    public void setExpirytime(long expirytime) {
        this.expirytime = expirytime;
    }
}
