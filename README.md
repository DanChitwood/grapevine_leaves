## External data used to produce this website can be found at:

**../FINAL_PROCRUSTES_COORDS:** https://zenodo.org/records/20722855  
**../ALIGNED_LEAF_MASKS:** https://zenodo.org/records/20242260  
**../ALIGNED_LEAF_LOBES:** https://zenodo.org/records/20241355  

## 00_calculate_grid.py

This script serves as the structural foundation of the atlas. It compiles leaf shape data and uses Linear Discriminant Analysis (LDA) to reduce the complex geometric coordinates of every leaf into a two-dimensional space. By sorting leaves along these two LDA components, the script organizes the thousands of samples into a cohesive, structured grid. The output is a manifest file that maps every leaf to a specific $(x, y)$ coordinate, ensuring that leaves with similar shapes are positioned near each other in the final visualization.

## 01_test_images.py

Before committing to the full-scale generation, this script acts as a quality control checkpoint. It takes a small, representative subset of samples from each leaf type and renders them according to your custom visual specifications—blending grayscale leaf bodies with color-coded lobe data. This allows you to verify that the visual layering, transparency, and color-tints are rendering correctly, ensuring the aesthetic and biological accuracy of the individual leaf tiles before processing the entire dataset.

## 02_build_DZI.py

This final step generates the interactive visualization. It iterates through the entire dataset and renders every individual leaf tile according to the previously verified visual style, stitching them together into a massive, high-resolution mosaic grid. Finally, it uses the pyvips library to convert this immense image into a Deep Zoom Image (DZI) pyramid. This format breaks the giant mosaic into small, manageable tiles that load dynamically, allowing users to explore thousands of high-resolution leaves smoothly in a web browser without overwhelming their system.
