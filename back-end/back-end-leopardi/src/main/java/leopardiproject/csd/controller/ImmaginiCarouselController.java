package leopardiproject.csd.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import leopardiproject.csd.model.ImmaginiCarousel;
import leopardiproject.csd.repository.ImmaginiCarouselRepository;

@RestController
@CrossOrigin
public class ImmaginiCarouselController {
	@Autowired
	ImmaginiCarouselRepository imageRepository;

	@GetMapping(path = { "/immagineCarousel" })
	public List<ImmaginiCarousel> getImage() throws IOException {
		return (List<ImmaginiCarousel>) imageRepository.findAll();
    }
    
    public static byte[] decompressBytes(byte[] data) {
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		try {
			while (!inflater.finished()) {
				int count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			outputStream.close();
		} catch (IOException ioe) {
		} catch (DataFormatException e) {
		}
		return outputStream.toByteArray();
	}
}
