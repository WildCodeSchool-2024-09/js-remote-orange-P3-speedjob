import { Container, Typography, Box, Paper } from "@mui/material";

function Legal() {
	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Paper elevation={3} sx={{ p: 4 }}>
				<Box sx={{ mb: 4 }}>
					<Typography variant="h4" align="center" gutterBottom>
						Mentions Légales
					</Typography>
				</Box>
				<Box sx={{ mb: 4 }}>
					<Typography variant="h5" align="center" gutterBottom>
						1. Informations Générales
					</Typography>
					<Typography variant="body1">
						Nom de l’entreprise : SpeedJob Forme juridique : SAS Siège social :
						24 boulevard des airs Numéro SIRET : 0123456789 RCS : PARIS Capital
						social : 5000€ Numéro de TVA intracommunautaire : 9876543210
					</Typography>
				</Box>
				<Box sx={{ mb: 4 }}>
					<Typography variant="h5" align="center" gutterBottom>
						2. Éditeur du Site
					</Typography>
					<Typography variant="body1">
						Le site web Speedjob, accessible à l’adresse Speedjob.com, est édité
						par :Alex, Badre et Ludo : WildCode School Adresse de contact :
						abgl@wildcodeschool.com Téléphone : 01.22.44.66.88
					</Typography>
				</Box>
				<Box sx={{ mb: 4 }}>
					<Typography variant="h5" align="center" gutterBottom>
						3. Directeur de la Publication
					</Typography>
					<Typography variant="body1">
						Nom du directeur de la publication : Yavuz Kutuk Adresse de contact
						: président@usa.com
					</Typography>
				</Box>
				<Box sx={{ mb: 4 }}>
					<Typography variant="h5" align="center" gutterBottom>
						4. Hébergement
					</Typography>
					<Typography variant="body1">
						Le site est hébergé par : Vercel Adresse : Vercel.com Téléphone :
						01.22.44.66.88
					</Typography>
				</Box>
				<Box sx={{ mb: 4 }}>
					<Typography variant="h5" align="center" gutterBottom>
						5. Propriété Intellectuelle
					</Typography>
					<Typography variant="body1">
						Tous les contenus présents sur le site (textes, images, graphismes,
						logos, vidéos, éléments logiciels, etc.) sont protégés par le droit
						d'auteur et restent la propriété exclusive de SpeedJob ou de ses
						partenaires. Toute reproduction, distribution, modification ou
						utilisation, même partielle, sans autorisation préalable est
						strictement interdite.
					</Typography>
				</Box>
				<Box sx={{ mb: 4 }}>
					<Typography variant="h5" align="center" gutterBottom>
						6. Protection des Données Personnelles
					</Typography>
					<Typography variant="body1">
						Conformément à la réglementation en vigueur (notamment le RGPD en
						Europe), les utilisateurs disposent d'un droit d’accès, de
						rectification, de suppression et de portabilité de leurs données.
						Pour exercer ces droits, veuillez contacter :Adresse email :
						abgl@wildschool.com Délégué à la protection des données (si
						applicable) : A.BCDE. Pour plus d’informations sur l’utilisation de
						vos données, consultez notre Politique de Confidentialité.
					</Typography>
				</Box>
				<Box sx={{ mb: 4 }}>
					<Typography variant="h5" align="center" gutterBottom>
						7. Limitations de Responsabilité
					</Typography>
					<Typography variant="body1">
						SpeedJob ne peut être tenu pour responsable en cas de dommages
						directs ou indirects liés à l’utilisation du site ou des
						informations qu’il contient. Les utilisateurs sont responsables de
						la vérification des informations avant toute utilisation ou prise de
						décision basée sur celles-ci.
					</Typography>
				</Box>
				<Box sx={{ mb: 4 }}>
					<Typography variant="h5" align="center" gutterBottom>
						8. Cookies
					</Typography>
					<Typography variant="body1">
						Le site utilise des cookies pour améliorer l’expérience utilisateur
						et réaliser des statistiques d’audience. Pour en savoir plus,
						consultez notre Politique de Gestion des Cookies.
					</Typography>
				</Box>
				<Box sx={{ mb: 4 }}>
					<Typography variant="h5" align="center" gutterBottom>
						9. Loi Applicable
					</Typography>
					<Typography variant="body1">
						Les présentes mentions légales sont régies par la loi française. En
						cas de litige, les tribunaux compétents seront ceux du ressort du
						siège social de l’entreprise.
					</Typography>
				</Box>
			</Paper>
		</Container>
	);
}

export default Legal;

